import React, { createContext, useCallback, useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeName, themes } from '../styles/theme';

interface ThemesContextData {
  toggleChangeTheme(): void;
  themeName: ThemeName;
}

const ThemesContext = createContext<ThemesContextData>({} as ThemesContextData);

const ThemesProvider: React.FC = ({ children }) => {
  const [themeName, setThemeName] = useState<ThemeName>(() => {
    const storagedTheme = localStorage.getItem('@NeoCliente:theme');

    if (storagedTheme) {
      return storagedTheme === 'dark' ? 'dark' : 'light';
    }

    return 'light';
  });
  const currentTheme = themes[themeName];

  const toggleChangeTheme = useCallback(() => {
    setThemeName(themeName === 'light' ? 'dark' : 'light');
    localStorage.setItem(
      '@NeoCliente:theme',
      themeName === 'light' ? 'dark' : 'light',
    );
  }, [themeName]);

  return (
    <ThemesContext.Provider value={{ toggleChangeTheme, themeName }}>
      <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
    </ThemesContext.Provider>
  );
};

function useTheme(): ThemesContextData {
  const context = useContext(ThemesContext);

  if (!context) {
    throw new Error('useTheme must be used within an ThemesProvider');
  }

  return context;
}

export { ThemesProvider, useTheme };
