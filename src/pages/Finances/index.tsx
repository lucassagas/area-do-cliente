import React from 'react';
import Contracts from '../../components/Contracts';
import FinancesData from '../../components/FinancesData';

import { Container } from './styles';

const Finances: React.FC = () => {
  return (
    <Container>
      <Contracts />

      <FinancesData />
    </Container>
  );
};

export default Finances;
