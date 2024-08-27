import { useEffect, useRef } from 'react';

/**
 * Custom hook to detect clicks outside of a specified element.
 * 
 * @param callback - Function to be called when a click outside the referenced element is detected.
 * @returns A ref that should be attached to the element you want to monitor for outside clicks.
 */

function useClickOutside<T extends HTMLElement>(callback: () => void) {
    // Create a ref to be attached to the element
    const ref = useRef<T>(null);

    useEffect(() => {
        // Event handler for detecting clicks outside the element
        const handleClickOutside = (event: MouseEvent) => {
            // Check if the click was outside the element referenced by the ref
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback(); // Call the provided callback function
            }
        };

        // Add event listener for 'mousedown' to detect clicks
        document.addEventListener('mousedown', handleClickOutside);

        // Clean up the event listener on component unmount or when the callback changes
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [callback]);

    return ref; // Return the ref to be attached to the target element
}

export default useClickOutside;
