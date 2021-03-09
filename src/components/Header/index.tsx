import React, { useCallback, useEffect, useState } from 'react';

import logoImg from '../../assets/logo.svg';

import { Container } from './styles';

import { RiArrowDownSLine, VscColorMode } from '../../styles/icon';
import MyAccountMenu from '../Menus/MyAccountMenu';
import { useAuth } from '../../hooks/auth';
import { useCustomer } from '../../hooks/customer';
import { useTheme } from '../../hooks/themes';

import lightProfileImg from '../../assets/profilelight.png';
import darkProfileImg from '../../assets/profiledark.png';
import Notifications from './Notifications';

const Header: React.FC = () => {
  const { user } = useAuth();
  const [displayMyAccount, setDisplayMyAccount] = useState(false);

  const { toggleChangeTheme, themeName } = useTheme();

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
  }, [handleLoadCustomer, user.id]);

  return (
    <Container>
      <img src={logoImg} alt="Logo" />
      <div>
        <Notifications />
        <button onClick={toggleChangeTheme} type="button">
          <VscColorMode size={19} />
        </button>

        <span>{user.name_abbreviate}</span>
        <button
          onClick={toggleMyAccount}
          onBlur={toggleMyAccountBlur}
          type="button"
        >
          <img
            src={themeName === 'dark' ? lightProfileImg : darkProfileImg}
            alt="Perfil"
          />
        </button>

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
