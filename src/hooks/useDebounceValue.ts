import { useState, useEffect, useRef } from 'react';

/**
 * useDebounceValue - Custom hook to debounce a value.
 *
 * This hook delays updating the debounced value until a specified delay
 * has passed without the value changing. Useful for reducing the frequency
 * of updates or actions based on changing values.
 *
 * @param value - The value to debounce.
 * @param delay - The delay in milliseconds before updating the debounced value.
 * @returns The debounced value.
 */
const useDebounceValue = <T>(value: T, delay: number): T => {
  // State to store the debounced value
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  // Ref to store the timeout ID, initialized as null
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    // Clear the previous timeout if it exists
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    }

    // Set up a new timeout to update the debounced value after the specified delay
    timeoutRef.current = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup function to clear the timeout if the value or delay changes
    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [value, delay]); // Re-run the effect if value or delay changes

  return debouncedValue;
};

export default useDebounceValue;
