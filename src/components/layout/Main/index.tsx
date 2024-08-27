import React from 'react';
import SearchWithSuggestions from '../../sections/SearchWithSuggestions';
import WordDetails from '../../sections/WordDetails';
import LoadingSpinner from '../../ui/LoadingSpinner';
import { useWordSearchContext } from '../../../context/WordSearchContext';

function Main() {

  const { wordDetails, isLoading, isError } = useWordSearchContext();

  return (
    <main className="space-y-8 text-black dark:text-zinc-200">
      {/* Component for search input and suggestions */}
      <SearchWithSuggestions />
      
      {/* Display a loading spinner while data is being fetched */}
      {isLoading && <LoadingSpinner />}
      
      {/* Display an error message if an error occurred */}
      {isError && (
        <p className="font-inconsolata text-lg font-semibold">
          Hmm, it seems that word doesn't exist, or maybe something's wrong. Head to a web search. 🙁
        </p>
      )}
      
      {/* Display word details if data is available and no error occurred */}
      {wordDetails && !isError && <WordDetails {...wordDetails} />}
    </main>
  );
}

export default React.memo(Main);
