import React from 'react';
import Skeleton from '../../Skeleton';

import { Container, Separator } from './styles';

const CustomerData: React.FC = () => {
  return (
    <Container>
      <div>
        <Skeleton className="skeleton-row" />
        <Skeleton className="skeleton-row" />
      </div>

      <div>
        <Skeleton className="skeleton-row" />
        <Skeleton className="skeleton-row" />
        <Skeleton className="skeleton-row" />
      </div>

      <div>
        <Skeleton className="skeleton-row" />
        <Skeleton className="skeleton-row" />
        <Skeleton className="skeleton-row" />
      </div>

      <Separator />

      <div>
        <Skeleton className="skeleton-row" />
        <Skeleton className="skeleton-row" />
        <Skeleton className="skeleton-row" />
      </div>

      <div>
        <Skeleton className="skeleton-row" />
        <Skeleton className="skeleton-row" />
      </div>

      <div>
        <Skeleton className="skeleton-row" />
        <Skeleton className="skeleton-row" />
        <Skeleton className="skeleton-row" />
      </div>

      <Skeleton className="skeleton-row" />
    </Container>
  );
};

export default CustomerData;
