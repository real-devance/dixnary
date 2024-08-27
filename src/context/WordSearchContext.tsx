import React, { createContext, useContext, useState, ReactNode } from 'react';
import useWordDefinition from '../apis/useWordDefinition';

// Define the type for the context values
type WordDefinitionReturnType = ReturnType<typeof useWordDefinition>;

// Extend the context type with additional state and setters
interface WordSearchContextType extends WordDefinitionReturnType {
    wordQuery: string;
    setWordQuery: React.Dispatch<React.SetStateAction<string>>;
}

// Create the context with an initial value of undefined
const WordSearchContext = createContext<WordSearchContextType | undefined>(undefined);

// Define the provider component
export function WordSearchProvider({ children }: { children: ReactNode }) {
    const [wordQuery, setWordQuery] = useState<string>('');
    const wordResponse = useWordDefinition(wordQuery);

    // Combine context values
    const contextValue: WordSearchContextType = {
        wordQuery,
        setWordQuery,
        ...wordResponse // Spread the values from the API hook into the context
    };

    return (
        <WordSearchContext.Provider value={contextValue}>
            {children}
        </WordSearchContext.Provider>
    );
}

// Custom hook for using the WordSearchContext
export const useWordSearchContext = () => {
    const context = useContext(WordSearchContext);
    if (context === undefined) {
        throw new Error('useWordSearchContext must be used within a WordSearchProvider');
    }
    return context;
};
