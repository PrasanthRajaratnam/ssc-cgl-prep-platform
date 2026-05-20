import { useState, useEffect } from 'react';

/**
 * A custom hook that synchronizes a state value with localStorage.
 * It first checks that `window` and `localStorage` are available to avoid SSR errors.
 * @param key The key to store under in localStorage
 * @param initialValue The default value if nothing exists in localStorage
 */
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(initialValue);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const item = window.localStorage.getItem(key);
      if (item) {
        setStoredValue(JSON.parse(item));
      }
    } catch (error) {
      console.error('Error reading localStorage key', key, error);
    }
  }, [key]);

  const setValue = (value: T) => {
    try {
      setStoredValue(value);
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error) {
      console.error('Error setting localStorage key', key, error);
    }
  };

  return [storedValue, setValue] as const;
}