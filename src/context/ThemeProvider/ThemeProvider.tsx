import { createContext, useContext, useState } from 'react';
import { keyObj, useLocalStorage } from '../../hooks/useLocalStorage';

export type Theme = 'dark' | 'light';

interface ThemeContextProps {
  theme: Theme | null;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: null,
  toggleTheme: () => {
    throw new Error('toggleTheme() not implemented yet');
  },
});

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const { theme, toggleTheme } = useThemeContextValue();

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
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

  const toggleTheme = () => {
    setTheme((prev) => {
      if (prev === 'light') {
        document.documentElement.classList.add('dark');
        setLocalStorageValue('dark');
        return 'dark';
      } else {
        document.documentElement.classList.remove('dark');
        setLocalStorageValue('light');
        return 'light';
      }
    });
  };

  return { theme, toggleTheme };
};

export const useTheme = () => {
  const value = useContext(ThemeContext);

  if (!value) {
    throw new Error('useTheme() must be used within a ThemeProvider');
  }

  return value;
};

