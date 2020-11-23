import React from 'react';
import Routes from '../../routes/app.routes';
import Header from '../Header';
import SideMenu from '../SideMenu';

import { Container, Content } from './styles';

const Layout: React.FC = () => {
  return (
    <Container>
      <SideMenu />
      <Header />
      <Content>
        <Routes />
      </Content>
    </Container>
  );
};

export default Layout;
