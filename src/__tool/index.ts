import { useEffect, useState } from 'react';

export function cleanObject(obj: any) {
  const result = { ...obj };
  for (const key in result) {
    if (result[key] === '' && result[key] !== 0) delete result[key];
  }
  // Object.keys(result).forEach((key) => {
  //   const value = obj[key];
  //   if (!value) {
  //     delete result[key];
  //   }
  // });
  return result;
}

export const useDebounce = <F>(value: F, time?: number): F => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, time);
    return () => clearTimeout(timeout);
  }, [value]);
  return debouncedValue;
};
