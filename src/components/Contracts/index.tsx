import React, { useCallback, useEffect, useState } from 'react';
import { useCustomer } from '../../hooks/customer';

import ShimmerContracts from '../Shimmer/Contracts';

import { Container, Card } from './styles';

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
      <section>
        {customer.contracts.map(contract => {
          return (
            <Card
              onClick={() => handleSelectContract(contract.id)}
              key={contract.id}
              type="button"
              className={active === contract.id ? 'active' : ''}
            >
              <h3>{contract.id}</h3>
              <span>ATIVAÇÃO {contract.ativacao}</span>
              <p>{contract.plan}</p>
            </Card>
          );
        })}
      </section>
    </Container>
  );
};

export default Contracts;
