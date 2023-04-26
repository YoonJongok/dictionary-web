import { createContext, useContext, useEffect, useState } from 'react';
import { keyObj, useLocalStorage } from '../../hooks/useLocalStorage';

export type Theme = 'dark' | 'light';

interface ThemeContextProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  isDarkMode: false,
  toggleTheme: () => {
    throw new Error('toggleTheme() not implemented yet');
  },
});

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const { isDarkMode, toggleTheme } = useThemeContextValue();

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>{children}</ThemeContext.Provider>
  );
};

const setInitialTheme = (setLocalStorageValue: (value: Theme) => void): Theme => {
  setLocalStorageValue('light');
  return 'light';
};

const useThemeContextValue = () => {
  const { localStorageValue, setLocalStorageValue } = useLocalStorage<Theme>(keyObj.theme);
  const [theme, setTheme] = useState<Theme>(
    localStorageValue || setInitialTheme(setLocalStorageValue)
  );

  const isDarkMode = theme === 'dark';

  const toggleTheme = () => {
    setTheme((prev) => {
      if (prev === 'light') {
        document.documentElement.classList.add('dark');
        return 'dark';
      } else {
        document.documentElement.classList.remove('dark');
        return 'light';
      }
    });
  };

  useEffect(() => {
    setLocalStorageValue(isDarkMode ? 'dark' : 'light');
    document.body.classList.toggle('dark', isDarkMode);
  }, [setLocalStorageValue, isDarkMode]);

  return { isDarkMode, toggleTheme };
};

export const useTheme = () => {
  const value = useContext(ThemeContext);

  if (!value) {
    throw new Error('No ThemeContext value found');
  }

  return value;
};

