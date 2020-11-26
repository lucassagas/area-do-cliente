import React from 'react';
import Contracts from '../../components/Contracts';
import FinancesData from '../../components/FinancesData';

import { FaDollarSign } from '../../styles/icon';

import { Container, ContractTitle } from './styles';

const Finances: React.FC = () => {
  return (
    <Container>
      <ContractTitle>
        <FaDollarSign size={20} />
        <strong>Contratos</strong>
      </ContractTitle>
      <Contracts />

      <span>
        <FaDollarSign size={20} />
        <strong>Faturas</strong>
      </span>
      <FinancesData />
    </Container>
  );
};

export default Finances;
