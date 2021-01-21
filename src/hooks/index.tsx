import React from 'react';

import { AuthProvider } from './auth';
import { CustomerProvider } from './customer';
import { ThemesProvider } from './themes';
import { ToastProvider } from './toast';
import { PlansProvider } from './plans';

const AppProvider: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <ToastProvider>
        <CustomerProvider>
          <ThemesProvider>
            <PlansProvider>{children}</PlansProvider>
          </ThemesProvider>
        </CustomerProvider>
      </ToastProvider>
    </AuthProvider>
  );
};

export default AppProvider;
