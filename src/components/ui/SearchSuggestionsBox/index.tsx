import React from 'react';
import useClickOutside from "../../../hooks/useClickOutside";

interface SearchSuggestionsBoxProps {
    words: string[]; 
    setInput: React.Dispatch<React.SetStateAction<string>>;
    handleSearch: (value: string) => void; 
    setIsSearchBoxVisible: React.Dispatch<React.SetStateAction<boolean>>; 
}

function SearchSuggestionsBox({ words, setInput, handleSearch, setIsSearchBoxVisible }: SearchSuggestionsBoxProps) {
    // Ref for handling clicks outside the suggestions box
    const suggestionBoxRef = useClickOutside<HTMLUListElement>(() => setIsSearchBoxVisible(false));

    return (
        <ul
            className="font-inconsolata"
            ref={suggestionBoxRef}
            aria-label="Search suggestions" 
        >
            {words.map((word) => (
                <li
                    key={word}
                    className="text-lg font-bold tracking-wide cursor-pointer"
                    onClick={() => {
                        setInput(word); 
                        handleSearch(word); 
                    }}
                >
                    {word}
                </li>
            ))}
        </ul>
    );
}

export default SearchSuggestionsBox;
