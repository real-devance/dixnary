import { useState, useEffect } from 'react';

// Define a type for the theme, which can be either 'light' or 'dark'
type Theme = 'light' | 'dark';

const useTheme = () => {
  // Retrieve the saved theme from localStorage, or default to 'light'
  const getInitialTheme = () => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as Theme;
      return savedTheme ? savedTheme : 'light';
    }
    return 'light';
  };

  // Initialize the theme state with the saved or default value
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  // Define a function to toggle the theme between 'light' and 'dark'
  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === 'light' ? 'dark' : 'light';
      // Save the new theme to localStorage
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  // Optional: Effect to synchronize theme changes with localStorage
  useEffect(() => {
    document.body.setAttribute("data-mode", theme);
  }, [theme]);

  // Return the theme and toggleTheme function as an array
  return [theme, toggleTheme] as const;
};

export default useTheme;
