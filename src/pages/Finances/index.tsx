import React from 'react';
import Contracts from '../../components/Contracts';
import FinancesData from '../../components/FinancesData';
import Footer from '../../components/Footer';

import { FaDollarSign } from '../../styles/icon';

import { Container } from './styles';

const Finances: React.FC = () => {
  return (
    <Container>
      <Contracts />

      <span>
        <FaDollarSign size={20} />
        <strong>Faturas</strong>
      </span>
      <FinancesData />

      <Footer />
    </Container>
  );
};

export default Finances;
