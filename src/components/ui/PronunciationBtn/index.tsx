import PlayIcon from '../../icons/PlayIcon';
import { useRef } from 'react';

interface PronunciationBtnProps {
    pronunciationURL: string; // URL to the pronunciation audio file
}

function PronunciationBtn({ pronunciationURL }: PronunciationBtnProps) {
    const audioRef = useRef<HTMLAudioElement | null>(null); // Ref to control the audio element

    // Function to play the audio when the button is clicked
    const handleSound = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0; // Restart the sound from the beginning
            audioRef.current.play(); // Play the audio
        }
    };

    return (
        <button
            className="bg-accent-color fill-primary rounded-full p-3 lg:p-4 flex items-center"
            onClick={handleSound} 
            aria-label="Play pronunciation" // Accessible label for screen readers
        >
            <div className="w-5 lg:w-6 h-auto fill-primary-color align-middle">
                <PlayIcon /> 
            </div>

            {/* Audio element with the pronunciation URL */}
            <audio ref={audioRef} src={pronunciationURL} />
        </button>
    );
}

export default PronunciationBtn;
