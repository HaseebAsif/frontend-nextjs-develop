import { useEffect, useRef, useCallback, useState } from 'react';

type IntervalFunction = () => unknown | void;

export const useInterval = (
  callback: IntervalFunction,
  delay?: number
): void => {
  const savedCallback = useRef<IntervalFunction | null>(null);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  const tick = useCallback(() => {
    savedCallback.current?.();
  }, []);

  useEffect(() => {
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay, tick]);
};

export const useIntervalStartStop = (
  callback: IntervalFunction,
  delay?: number
): ((arg0: boolean) => void) => {
  const savedCallback = useRef<IntervalFunction | null>(null);

  const [run, setRun] = useState<boolean>(false);
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  const tick = useCallback(() => {
    savedCallback.current?.();
  }, []);

  const startStop = useCallback((value) => {
    setRun(value);
  }, []);

  useEffect(() => {
    if (delay !== null && run) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay, run, tick]);
  return (value) => startStop(value);
};
