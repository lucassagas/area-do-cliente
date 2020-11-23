import React from 'react';

import CustomerData from '../../components/CustomerData';
import Footer from '../../components/Footer';

import { Container } from './styles';

const Customer: React.FC = () => {
  return (
    <Container initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div>
        <header>
          <img
            src="https://pbs.twimg.com/profile_images/537699494/BartSimpson.jpg"
            alt="Foto de Perfil"
          />
          <div>
            <strong>Lucas Sagás</strong>
            <span>Atenção mantenha suas informações atualizadas</span>
          </div>
        </header>

        <CustomerData display />
      </div>

      <Footer />
    </Container>
  );
};

export default Customer;
