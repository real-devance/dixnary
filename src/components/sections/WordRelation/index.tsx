interface WordRelationProps {
  title: string; // Title of the word relation (e.g., "Synonyms" or "Antonyms")
  words: string[]; // Array of words related to the title
}

function WordRelation({ title, words }: WordRelationProps) {
return (
  <div className="flex items-center gap-4">
    {/* Display the title of the word relation */}
    <h3 className="font-inconsolata text-lg font-normal text-gray-400">{title}</h3>
    
    {/* Display the list of related words */}
    <p className="font-lora text-base font-bold text-primary-color">
      {words.join(', ')} {/* Join the array of words into a comma-separated string */}
    </p>
  </div>
);
}

export default WordRelation;
