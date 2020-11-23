import React, { useState } from 'react';

import { ThemeProvider } from 'styled-components';
import { ThemeName, themes } from '../styles/theme';
import { AuthProvider } from './auth';
import { ToastProvider } from './toast';

const AppProvider: React.FC = ({ children }) => {
  const [themeName] = useState<ThemeName>('light');
  const currentTheme = themes[themeName];

  return (
    <AuthProvider>
      <ToastProvider>
        <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
      </ToastProvider>
    </AuthProvider>
  );
};

export default AppProvider;
