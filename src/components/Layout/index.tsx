import React from 'react';
import Routes from '../../routes';
import Footer from '../Footer';
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
