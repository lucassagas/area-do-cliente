import React, { useCallback, useEffect, useState } from 'react';

import logoImg from '../../assets/logo.svg';

import Notification from './Notifications';

import { Container } from './styles';

import { RiArrowDownSLine, VscColorMode } from '../../styles/icon';
import MyAccountMenu from '../Menus/MyAccountMenu';
import { useAuth } from '../../hooks/auth';
import { useCustomer } from '../../hooks/customer';
import { useTheme } from '../../hooks/themes';
import api from '../../services/api';

interface NotificationsProps {
  type: 'info' | 'success' | 'error' | 'congratulations';
  title: string;
  description: string;
  read: boolean;
  id: string;
}

const Header: React.FC = () => {
  const { user } = useAuth();
  const [displayMyAccount, setDisplayMyAccount] = useState(false);
  const [notifications, setNotifications] = useState<NotificationsProps[]>(
    () => {
      const response = api.get(`notifications/${user.id}`);

      return (response as unknown) as NotificationsProps[];
    },
  );

  const { toggleChangeTheme } = useTheme();

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

    async function loadNotifications() {
      api.get(`notifications/${user.id}`).then(response => {
        setNotifications(response.data);
      });
    }

    loadData();
    loadNotifications();
  }, [handleLoadCustomer, user.id]);

  return (
    <Container>
      <img src={logoImg} alt="Logo" />
      <div>
        <Notification messages={notifications} />
        <button onClick={toggleChangeTheme} type="button">
          <VscColorMode size={19} />
        </button>

        <span>{user.name_abbreviate}</span>
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
