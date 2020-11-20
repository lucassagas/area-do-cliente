import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px auto 0 60px;
  width: 100%;

  @media (max-width: 768px) {
    margin: 100px auto 0;
  }
`;
