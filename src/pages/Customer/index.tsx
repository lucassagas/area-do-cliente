import React from 'react';

import CustomerData from '../../components/CustomerData';
import { useAuth } from '../../hooks/auth';
import { useTheme } from '../../hooks/themes';

import lightProfileImg from '../../assets/profilelight.png';
import darkProfileImg from '../../assets/profiledark.png';

import { Container } from './styles';

const Customer: React.FC = () => {
  const { user } = useAuth();
  const { themeName } = useTheme();
  return (
    <Container initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div>
        <header>
          <img
            src={themeName === 'dark' ? lightProfileImg : darkProfileImg}
            alt="Foto de Perfil"
          />
          <div>
            <strong>{user.name}</strong>
            <span>Atenção mantenha suas informações atualizadas</span>
          </div>
        </header>

        <CustomerData display />
      </div>
    </Container>
  );
};

export default Customer;
