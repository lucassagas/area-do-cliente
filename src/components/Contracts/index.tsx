import React from 'react';

import { FaDollarSign } from '../../styles/icon';

import { Container, Card, ContractTitle } from './styles';

const Contracts: React.FC = () => {
  return (
    <>
      <ContractTitle>
        <FaDollarSign size={20} />
        <strong>Contratos</strong>
      </ContractTitle>
      <Container>
        <section>
          <Card type="button">
            <h3>Contrato 1</h3>
            <span>15/02/2021</span>
            <p>150Mb</p>
          </Card>

          <Card type="button">
            <h3>Contrato 1</h3>
            <span>15/02/2021</span>
            <p>150Mb</p>
          </Card>

          <Card type="button">
            <h3>Contrato 1</h3>
            <span>15/02/2021</span>
            <p>150Mb</p>
          </Card>
        </section>
      </Container>
    </>
  );
};

export default Contracts;
