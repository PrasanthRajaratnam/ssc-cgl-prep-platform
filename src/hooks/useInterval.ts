import { useEffect, useRef } from 'react';

/**
 * Custom hook that invokes a callback every `delay` milliseconds.
 * It keeps a ref to the latest callback and clears the interval on unmount.
 * Adapted from Dan Abramov’s useInterval hook【611940900480076†L45-L86】.
 */
export function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef<() => void>();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      if (savedCallback.current) savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}