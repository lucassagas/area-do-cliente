import React from 'react';

import { AuthProvider } from './auth';
import { CustomerProvider } from './customer';
import { ThemesProvider } from './themes';
import { ToastProvider } from './toast';
import { PlansProvider } from './plans';

const AppProvider: React.FC = ({ children }) => {
  return (
    <ThemesProvider>
      <AuthProvider>
        <ToastProvider>
          <CustomerProvider>
            <PlansProvider>{children}</PlansProvider>
          </CustomerProvider>
        </ToastProvider>
      </AuthProvider>
    </ThemesProvider>
  );
};

export default AppProvider;
