import React from 'react';
import SearchIcon from '../../icons/SearchIcon';

interface InputFieldProps {
    value: string; 
    handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void; 
    handleSearch: (val: string) => void; 
}

function InputSearchField({ value, handleInput, handleSearch }: InputFieldProps) {

    // Handle key down events in the input field
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent default form submission behavior
            handleSearch(value); // Trigger search with the current input value
        }
    };

    return (
        <label htmlFor="search" className="relative">
            {/* Button to trigger the search action */}
            <button
                className="absolute inset-y-0 right-4 
                flex items-center 
                pointer-events-cursor w-5"
                onClick={() => handleSearch(value)}
                aria-label="search button" 
            >
                <SearchIcon />
            </button>

            {/* Input field for entering the search term */}
            <input
                type="text"
                id="search" // Associated with the label
                name="search"
                placeholder="Search Word" 
                aria-label="search field" 
                className="w-full p-3 lg:p-4 pe-12 
                font-inconsolata text-xl/none font-bold text-black placeholder-gray-500
                border-0 rounded-lg 
                bg-gray-200 
                focus:outline focus:outline-2 focus:outline-primary-color"
                value={value} 
                onChange={handleInput} 
                onKeyDown={handleKeyDown} // Add key down handler
                required 
            />
        </label>
    );
}

export default InputSearchField;
