import React, { useCallback, useEffect, useState } from 'react';

import logoImg from '../../assets/logo.svg';

import { Container } from './styles';

import {
  AiOutlineBell,
  RiArrowDownSLine,
  VscColorMode,
} from '../../styles/icon';
import MyAccountMenu from '../Menus/MyAccountMenu';
import { useAuth } from '../../hooks/auth';
import { useCustomer } from '../../hooks/customer';
import { useTheme } from '../../hooks/themes';

const Header: React.FC = () => {
  const [displayMyAccount, setDisplayMyAccount] = useState(false);

  const { toggleChangeTheme } = useTheme();

  const { user } = useAuth();
  const { handleLoadCustomer } = useCustomer();

  const toggleMyAccount = useCallback(() => {
    setDisplayMyAccount(!displayMyAccount);
  }, [displayMyAccount]);

  const toggleMyAccountBlur = useCallback(() => {
    setTimeout(() => {
      setDisplayMyAccount(false);
    }, 200);
  }, []);

  useEffect(() => {
    async function loadData() {
      await handleLoadCustomer();
    }

    loadData();
  }, [handleLoadCustomer]);

  return (
    <Container>
      <img src={logoImg} alt="Logo" />
      <div>
        <button type="button">
          <AiOutlineBell size={19} />
        </button>
        <button onClick={toggleChangeTheme} type="button">
          <VscColorMode size={19} />
        </button>

        <span>{user.name}</span>
        <img
          src="https://pbs.twimg.com/profile_images/537699494/BartSimpson.jpg"
          alt="Perfil"
        />
        <section className="MyAccount">
          <button
            onClick={toggleMyAccount}
            onBlur={toggleMyAccountBlur}
            type="button"
          >
            <RiArrowDownSLine size={24} color="var(--text)" />
          </button>
          {displayMyAccount && <MyAccountMenu />}
        </section>
      </div>
    </Container>
  );
};

export default Header;
