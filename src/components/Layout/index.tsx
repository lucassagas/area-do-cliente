import React from 'react';
import Routes from '../../routes/app.routes';
import Footer from '../Footer';
import Header from '../Header';
import MenuMobile from '../Menus/MenuMobile';
import SideMenu from '../Menus/SideMenu';

import { Container, Content } from './styles';

const Layout: React.FC = () => {
  return (
    <>
      <Container>
        <SideMenu />
        <MenuMobile />
        <Header />
        <Content>
          <Routes />
          <Footer />
        </Content>
      </Container>
    </>
  );
};

export default Layout;
