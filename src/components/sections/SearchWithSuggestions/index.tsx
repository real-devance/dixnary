import { useState, useEffect } from 'react';
import InputSearchField from '../../ui/InputSearchField';
import SearchSuggestionsBox from '../../ui/SearchSuggestionsBox';
import useWordSuggestions from '../../../apis/useWordSuggestion';
import useDebounceValue from '../../../hooks/useDebounceValue';
import { useWordSearchContext } from '../../../context/WordSearchContext';
import { useParams, useNavigate } from 'react-router-dom';

function SearchWithSuggestions() {
    // State to manage the search input value
    const [searchInput, setSearchInput] = useState('');
    // State to toggle the visibility of the search suggestions box
    const [isSearchBoxVisible, setIsSearchBoxVisible] = useState(false);
    // Debounced search input to avoid excessive API calls
    const suggestionQuery = useDebounceValue(searchInput, 400);
    // Fetch word suggestions based on the debounced input value
    const { suggestions } = useWordSuggestions(suggestionQuery, 5);

    // Access and update the word query in context
    const { setWordQuery } = useWordSearchContext();

    // Access the queryWord parameter from the URL
    const { queryWord } = useParams();
    // Navigate to different routes
    const navigate = useNavigate();

    // Handle input changes in the search field
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value);
        setIsSearchBoxVisible(true);
    };

    // Handle the search action when a suggestion is clicked or search is initiated
    const handleSearch = (value: string) => {
        setWordQuery(value.trimStart());
        setIsSearchBoxVisible(false);
        navigate(`/${value}`);
    };

    // Update the search input and context when queryWord changes
    useEffect(() => {
        if (typeof queryWord === "undefined") {
            setSearchInput('');
            setWordQuery('');
            return;
        }

        if (queryWord) {
            setSearchInput(queryWord);
            setWordQuery(queryWord);
        }
    }, [queryWord]);


    return (
        <section className="relative"> 
            {/* Input field for searching */}
            <InputSearchField 
                value={searchInput}
                handleInput={handleInput} 
                handleSearch={handleSearch}
            />
            
            {/* Conditional rendering of the suggestions box */}
            {isSearchBoxVisible && suggestions.length > 0 && 
                <div className="absolute z-10 w-full
                p-2 mt-2
                bg-gray-300 rounded-lg 
                text-black">
                    <SearchSuggestionsBox 
                        words={suggestions} 
                        setInput={setSearchInput} 
                        handleSearch={handleSearch} 
                        setIsSearchBoxVisible={setIsSearchBoxVisible}
                    />
                </div>
            }
        </section>
    );
}

export default SearchWithSuggestions;
