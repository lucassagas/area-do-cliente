import React, { useState } from 'react';

import { ThemeProvider } from 'styled-components';
import { ThemeName, themes } from '../styles/theme';

const AppProvider: React.FC = ({ children }) => {
  const [themeName] = useState<ThemeName>('light');
  const currentTheme = themes[themeName];

  return <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>;
};

export default AppProvider;
