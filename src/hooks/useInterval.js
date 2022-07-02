import { useState, useRef, useEffect, useCallback } from 'react';

export const useInterval = () => {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    const interval = intervalRef.current;
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = intervalRef.current;
    return () => clearInterval(interval);
  }, []);

  const reset = useCallback(() => {
    clearInterval(intervalRef.current);
    setTimer(0);
    intervalRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  }, []);

  const stop = useCallback(() => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }
  }, []);

  return {
    timer,
    reset,
    stop,
  };
};
