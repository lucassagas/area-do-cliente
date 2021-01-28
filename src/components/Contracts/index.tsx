import React, { useCallback, useEffect, useState } from 'react';
import { useCustomer } from '../../hooks/customer';

import ShimmerContracts from '../Shimmer/Contracts';

import { RiMoneyDollarCircleLine } from '../../styles/icon';

import { Container, Card, Title } from './styles';

const Contracts: React.FC = () => {
  const [active, setActive] = useState<string>();
  const { customer, handleLoadBillets } = useCustomer();

  const handleSelectContract = useCallback(
    (data: string) => {
      handleLoadBillets(data);
      setActive(data);
    },
    [handleLoadBillets],
  );

  useEffect(() => {
    if (customer) {
      setActive(customer.contracts[0].id);
    }
  }, [customer]);

  if (!customer) {
    return <ShimmerContracts />;
  }

  return (
    <Container>
      <Title>
        <RiMoneyDollarCircleLine size={24} />
        <strong>Contratos</strong>
      </Title>
      <section>
        {customer.contracts.map(contract => {
          const date = contract.ativacao.split('/');
          const day = date[0].padStart(2, '0');
          const month = date[1].padStart(2, '0');
          const year = date[2];

          const formattedDate = `${day}/${month}/${year}`;
          return (
            <Card
              onClick={() => handleSelectContract(contract.id)}
              key={contract.id}
              type="button"
              className={active === contract.id ? 'active' : ''}
            >
              <h3>{contract.id}</h3>
              <span>ATIVAÇÃO {formattedDate}</span>
              <p>{contract.plan}</p>
            </Card>
          );
        })}
      </section>
    </Container>
  );
};

export default Contracts;
