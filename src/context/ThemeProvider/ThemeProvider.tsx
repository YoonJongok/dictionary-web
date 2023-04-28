import { createContext, useContext, useEffect, useState } from 'react';
import { keyObj, useLocalStorage } from '../../hooks/useLocalStorage';
import { typographyConfig } from '../../components/Header/TypographySelectBox/TypographySelectBox';

export type Theme = 'dark' | 'light';
export type TypographyKey = 'Sans Serif' | 'Serif' | 'Mono';
export type TypographyValue = 'Inter, sans-serif' | 'Lora, serif' | 'Inconsolata, monospace';
export type Typography = { key: TypographyKey; value: TypographyValue };

interface ThemeContextProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  switchFont: (font: Typography) => void;
  font: Typography;
}

const ThemeContext = createContext<ThemeContextProps>({
  isDarkMode: false,
  font: { key: 'Sans Serif', value: 'Inter, sans-serif' },
  toggleTheme: () => {
    throw new Error('toggleTheme() not implemented yet');
  },
  switchFont: (font: Typography) => {
    throw new Error(`${font} toggleFont() not implemented yet`);
  },
});

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const { isDarkMode, toggleTheme, switchFont, font } = useThemeContextValue();

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, switchFont, font }}>
      {children}
    </ThemeContext.Provider>
  );
};

const setInitialTheme = (setLocalStorageValue: (value: Theme) => void): Theme => {
  setLocalStorageValue('light');
  return 'light';
};

const useThemeContextValue = () => {
  const [font, setFont] = useState<Typography>(typographyConfig[0]);

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

  const switchFont = (font: Typography) => {
    setFont(font);
  };

  document.body.style.fontFamily = font.value;

  useEffect(() => {
    setLocalStorageValue(isDarkMode ? 'dark' : 'light');
    document.body.classList.toggle('dark', isDarkMode);
  }, [setLocalStorageValue, isDarkMode]);

  return { isDarkMode, toggleTheme, switchFont, font };
};

export const useTheme = () => {
  const value = useContext(ThemeContext);

  if (!value) {
    throw new Error('No ThemeContext value found');
  }

  return value;
};

