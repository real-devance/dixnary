import { createContext, useContext, ReactNode } from 'react';
import useTheme from '../hooks/useTheme'; // Import the custom useTheme hook

// Define the type for the theme context
interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

// Create the theme context with an initial value of undefined
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Define the provider component using a function declaration
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, toggleTheme] = useTheme(); // Use the custom hook for theme management

  // Provide the context value
  const contextValue: ThemeContextType = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook for using the ThemeContext
export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
}
