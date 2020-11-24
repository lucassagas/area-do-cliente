import React, { useState } from 'react';

import { ThemeProvider } from 'styled-components';
import { ThemeName, themes } from '../styles/theme';
import { AuthProvider } from './auth';
import { CustomerProvider } from './customer';
import { ToastProvider } from './toast';

const AppProvider: React.FC = ({ children }) => {
  const [themeName] = useState<ThemeName>('light');
  const currentTheme = themes[themeName];

  return (
    <AuthProvider>
      <ToastProvider>
        <CustomerProvider>
          <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
        </CustomerProvider>
      </ToastProvider>
    </AuthProvider>
  );
};

export default AppProvider;
