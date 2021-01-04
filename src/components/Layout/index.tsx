import React from 'react';
import { useCustomer } from '../../hooks/customer';
import Routes from '../../routes/app.routes';
import FirstAccess from '../FirstAccess';
import Footer from '../Footer';
import Header from '../Header';
import MenuMobile from '../Menus/MenuMobile';
import SideMenu from '../Menus/SideMenu';

import { Container, Content } from './styles';

const Layout: React.FC = () => {
  const { displayModalPassword } = useCustomer();
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
      {displayModalPassword && <FirstAccess close title="Alterar senha" />}
    </>
  );
};

export default Layout;
