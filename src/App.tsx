import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Notifications } from 'react-push-notification';
import AppProvider from './hooks';

import GlobalStyle from './styles/global';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <Router>
      <Notifications />
      <AppProvider>
        <Routes />
        <GlobalStyle />
      </AppProvider>
    </Router>
  );
};

export default App;
