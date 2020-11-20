import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppProvider from './hooks';

import GlobalStyle from './styles/global';

import Layout from './components/Layout';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <Router>
      <AppProvider>
        <Layout />
        <GlobalStyle />
      </AppProvider>
    </Router>
  );
};

export default App;
