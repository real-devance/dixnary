import { useState, useEffect, useRef } from 'react';
import axios from 'axios';


interface FormatData {
  word: string;
  phonetic: string[];
  audio: string[];
  meanings: { partOfSpeech: string; definition: string[] }[];
  synonyms: string[];
  examples: string[];
  sources: string[];
}

function useWordDefinition<T>(query: string) {
  // State to hold the word details, loading status, error status, and error message
  const [wordDetails, setWordDetails] = useState<FormatData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Ref to manage the AbortController for canceling requests
  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    // If the query is empty, reset state and exit
    if (!query) {
      setWordDetails(null);
      setIsLoading(false);
      setIsError(false);
      setError(null);
      return;
    }

    // Immediately invoked async function to fetch word definition
    (async () => {
      // Abort any ongoing request before starting a new one
      abortControllerRef.current?.abort();
      abortControllerRef.current = new AbortController();

      // Reset state before starting the request
      setWordDetails(null);
      setIsLoading(true);
      setIsError(false);
      setError(null);

      try {
        // Fetch word definition from the API using the generic type `T`
        const response = await axios.get<T>(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`,
          { 
            signal: abortControllerRef.current?.signal, 
          }
        );
 

        // Check if response is valid
        if (response.status === 200 && Array.isArray(response.data) && response.data.length > 0) {
          const data = response.data;

          // Initialize collections to store unique values
          const phoneticSet = new Set<string>();
          const audioSet = new Set<string>();
          const meaningMap: { [key: string]: string[] } = {};
          const synonymsSet = new Set<string>();
          const examplesSet = new Set<string>();
          const sourcesSet = new Set<string>((data as any[]).flatMap(d => d.sourceUrls));

          // Process each response object
          data.forEach((d: any) => {
            d.phonetics.forEach((p: any) => {
              if (p.text) phoneticSet.add(p.text);
              if (p.audio) audioSet.add(p.audio);
            });

            d.meanings.forEach((m: any) => {
              if (!meaningMap[m.partOfSpeech]) {
                meaningMap[m.partOfSpeech] = [];
              }
              meaningMap[m.partOfSpeech].push(...m.definitions.map((def: any) => def.definition));

              m.synonyms.forEach((syn: any) => synonymsSet.add(syn));
              m.definitions.forEach((def: any) => {
                if (def.example) examplesSet.add(def.example);
              });
            });
          });

          // Format the collected data
          const formatData: FormatData = {
            word: data[0].word,
            phonetic: Array.from(phoneticSet),
            audio: Array.from(audioSet),
            meanings: Object.keys(meaningMap).map(partOfSpeech => ({
              partOfSpeech,
              definition: meaningMap[partOfSpeech],
            })),
            synonyms: Array.from(synonymsSet),
            examples: Array.from(examplesSet),
            sources: Array.from(sourcesSet),
          };

          setWordDetails(formatData);
        } else {
          throw new Error('No data found for the given query');
        }

      } catch (error) {
        // Handle cancellation or other errors
        if (axios.isCancel(error)) {
          return;
        } else {
          setWordDetails(null);
          setIsError(true);
          setError(error instanceof Error ? error.message : 'Unknown error');
        }

      } finally {
        setIsLoading(false); // Reset loading state
      }
    })();

    // Cleanup function to abort request if the component unmounts
    return () => {
      abortControllerRef.current?.abort();
    };

  }, [query]); // Effect dependency on the query

  // Return the state values as a constant
  return { wordDetails, isLoading, isError, error } as const;
}

export default useWordDefinition;
