import { useEffect, useState } from 'react';

export const keyObj = {
  theme: 'theme',
};

const getStorageValue = <T,>(key: string) => {
  const saved = localStorage.getItem(key);
  const parsedData: T = saved !== null ? JSON.parse(saved) : '';
  return parsedData;
};

export const useLocalStorage = <T,>(
  key: string
): {
  localStorageValue: T;
  setLocalStorageValue: (value: T) => void;
  clearLocalStorage: () => void;
} => {
  const [localStorageValue, setLocalStorageValue] = useState<T>(() => {
    return getStorageValue<T>(key);
  });

  useEffect(() => {
    key && localStorage.setItem(key, JSON.stringify(localStorageValue));
  }, [key, localStorageValue]);

  const clearLocalStorage = () => localStorage.clear();

  return { localStorageValue, setLocalStorageValue, clearLocalStorage };
};

