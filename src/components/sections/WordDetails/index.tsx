import WordDisplay from '../WordDisplay';
import WordMeaningDisplay from '../WordMeaningDisplay';
import ListView from '../../ui/ListView';
import WordRelation from '../WordRelation';
import SourceUrlDisplay from '../../ui/SourceUrlDisplay';

interface WordDetailsProps {
  word: string; // The main word to be displayed
  phonetic: string[]; // Array of phonetic representations
  audio: string[]; // Array of audio URLs for pronunciation
  meanings: { partOfSpeech: string; definition: string[] }[]; // Array of meanings with parts of speech and definitions
  synonyms: string[]; // Array of synonyms
  examples: string[]; // Array of example sentences
  sources: string[]; // Array of source URLs
}

function WordDetails({ word, phonetic, audio, meanings, synonyms, examples, sources }: WordDetailsProps) {
  return (
    <section className="space-y-8">
      {/* Component to display the word with phonetic and pronunciation */}
      <WordDisplay
        word={word}
        phonetic={phonetic.length > 0 ? phonetic[0] : ''} // Display the first phonetic representation if available
        pronunciationURL={audio.length > 0 ? audio[0] : ''} // Display the first audio URL if available
      />

      {/* Map over meanings and display each part of speech with its definitions */}
      {meanings.map((meaning) => (
        <WordMeaningDisplay
          key={meaning.partOfSpeech} 
          partOfSpeech={meaning.partOfSpeech}
          wordMeanings={meaning.definition.slice(0, 5)} // Display up to the first 5 definitions
        />
      ))}

      {/* Display examples if available, showing up to the first 3 */}
      {examples.length > 0 && <ListView title="Examples" items={examples.slice(0, 3)} />}

      {/* Display synonyms if available, showing up to the first 3 */}
      {synonyms.length > 0 && <WordRelation title="Synonyms" words={synonyms.slice(0, 3)} />}

      {/* Display the source URL if available */}
      <SourceUrlDisplay url={sources[0]} />
    </section>
  );
}

export default WordDetails;
