import React from 'react';
import Skeleton from '../../Skeleton';

import { Container } from './styles';

const Contracts: React.FC = () => {
  return (
    <Container>
      <div>
        <Skeleton className="skeleton-row" />
        <Skeleton className="skeleton-row" />
        <Skeleton className="skeleton-row" />
      </div>
    </Container>
  );
};

export default Contracts;
