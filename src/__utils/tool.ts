import { useEffect, useState } from 'react';

export function cleanObject(obj: { [key: string]: unknown }) {
  const result = { ...obj };
  for (const key in result) {
    if (
      result[key] === '' ||
      result[key] === undefined ||
      result[key] === null
    ) {
      if (result[key] !== 0) delete result[key];
    }
  }
  return result;
}

export const useDebounce = <F>(value: F, time?: number): F => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, time);
    return () => clearTimeout(timeout);
  }, [time, value]);
  return debouncedValue;
};
