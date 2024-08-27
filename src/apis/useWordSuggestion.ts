import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

/**
 * Custom hook for fetching word suggestions based on a query.
 * 
 * @param query - The search query for fetching suggestions.
 * @param maxSuggestions - The maximum number of suggestions to fetch (default is 10).
 * @returns An object containing the suggestions, loading state, error state, and error message.
 */

const URL = "https://api.datamuse.com/sug";

// Type for the response received from the API
interface SuggestionResponse {
  word: string;
  score: number;
}

// Type for the list of suggestions (words)
type Suggestion = string[];

function useWordSuggestions(query: string, maxSuggestions: number = 10) {
  // State to store the fetched suggestions
  const [suggestions, setSuggestions] = useState<Suggestion>([]);
  // State to manage loading state
  const [isLoading, setIsLoading] = useState(false);
  // State to manage error state
  const [isError, setIsError] = useState(false);
  // State to store the error message
  const [error, setError] = useState<string | null>(null);

  // Reference to handle request cancellation
  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    // Clear suggestions if the query is empty
    if (!query) {
      setSuggestions([]);
      setIsLoading(false);
      setIsError(false);
      setError(null);
      return;
    }

    // Async function to fetch suggestions
    (async () => {
      // Cancel any ongoing request
      abortControllerRef.current?.abort();
      abortControllerRef.current = new AbortController();

      // Set loading state and clear previous errors
      setIsLoading(true);
      setIsError(false);
      setError(null);

      try {
        // Make API request for word suggestions
        const response = await axios.get<SuggestionResponse[]>(URL, {
          signal: abortControllerRef.current?.signal,
          params: {
            s: query, // Search query
            max: maxSuggestions, // Maximum number of suggestions
          },
        });

        // Check if the response status is OK
        if (response.status === 200) {
          // Extract words from the response and update suggestions
          const data = response.data.map(item => item.word);
          setSuggestions(data);
        } else {
          // Handle non-OK responses
          throw new Error('Network response was not ok');
        }

      } catch (error) {
        // Handle request cancellation and other errors
        if (axios.isCancel(error)) {
          return
        } else {
          setSuggestions([]);
          setIsError(true);
          setError(error instanceof Error ? error.message : 'Unknown error');
        }
      } finally {
        // Reset loading state
        setIsLoading(false);
      }
    })();

    // Cleanup function to abort request on component unmount
    return () => {
      abortControllerRef.current?.abort();
    };
  }, [query, maxSuggestions]); // Dependency array includes query and maxSuggestions

  // Return the state values
  return { suggestions, isLoading, isError, error } as const;
}

export default useWordSuggestions;
