import React from 'react';

import CustomerData from '../../components/CustomerData';
import { useAuth } from '../../hooks/auth';

import { Container } from './styles';

const Customer: React.FC = () => {
  const { user } = useAuth();
  return (
    <Container initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div>
        <header>
          <img
            src="https://pbs.twimg.com/profile_images/537699494/BartSimpson.jpg"
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
