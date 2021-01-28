/* eslint-disable react/no-array-index-key */
/* eslint-disable no-plusplus */
import React from 'react';
import Skeleton from '../../Skeleton';

import { Container } from './styles';

interface rowsProps {
  rows: number;
}

const FinancesData: React.FC<rowsProps> = ({ rows }) => {
  const Arrayrows = [];
  for (let i = 0; i < rows; i++) {
    Arrayrows.push(i);
  }
  return (
    <Container>
      {Arrayrows.map((_, index) => {
        return (
          <div key={index} className="skeleton-container">
            <Skeleton className="skeleton-row" />
            <Skeleton className="skeleton-row" />
            <Skeleton className="skeleton-row" />

            <Skeleton className="skeleton-icon" />
          </div>
        );
      })}
    </Container>
  );
};

export default FinancesData;
