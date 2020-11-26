import React from 'react';

import { AuthProvider } from './auth';
import { CustomerProvider } from './customer';
import { ThemesProvider } from './themes';
import { ToastProvider } from './toast';

const AppProvider: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <ToastProvider>
        <CustomerProvider>
          <ThemesProvider>{children}</ThemesProvider>
        </CustomerProvider>
      </ToastProvider>
    </AuthProvider>
  );
};

export default AppProvider;
