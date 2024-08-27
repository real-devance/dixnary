import PronunciationBtn from '../../ui/PronunciationBtn';

interface WordDisplayProps {
    word: string; 
    phonetic?: string; 
    pronunciationURL?: string; 
}

function WordDisplay({ word, phonetic, pronunciationURL }: WordDisplayProps) {

    return (
        <section className="flex items-center justify-between gap-4">
            {/* Container for the word and phonetic spelling */}
            <div className="font-lora">
                {/* Display the main word */}
                <h1 className="text-3xl md:text-4xl font-bold">{word}</h1>
                
                {/* Conditionally display the phonetic spelling if provided */}
                {phonetic && <p className="text-lg font-medium text-primary-color">{phonetic}</p>}
            </div>

            {/* Conditionally render the PronunciationBtn if pronunciationURL is provided */}
            {pronunciationURL && <PronunciationBtn pronunciationURL={pronunciationURL} />} 
           
        </section>
    );
}

export default WordDisplay;
