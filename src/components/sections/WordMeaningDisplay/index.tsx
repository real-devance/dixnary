import ListView from '../../ui/ListView';

interface WordMeaningDisplayProps {
    partOfSpeech: string; // Part of speech (e.g., noun, verb) for the word
    wordMeanings: string[]; // Array of meanings for the word
}

function WordMeaningDisplay({ partOfSpeech, wordMeanings }: WordMeaningDisplayProps) {
  return (
    <div>
        {/* Container for the part of speech and separator */}
        <div className="flex gap-4 items-center mb-4">
            
            <span className="font-lora italic text-xl/3 font-bold">{partOfSpeech}</span>
            {/* Horizontal rule separating the part of speech from the meanings */}
            <hr className="w-full h-[2px] bg-gray-300" />
        </div>

        {/* ListView component to display the word meanings */}
        <ListView title="Meaning" items={wordMeanings} />
    </div>
  );
}

export default WordMeaningDisplay;
