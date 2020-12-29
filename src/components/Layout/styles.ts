import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  min-height: 95vh;
  display: flex;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px 0 0 0;
  width: 100%;
  margin-left: 60px;

  @media (max-width: 1920px) {
    margin-left: 43px;
  }

  @media (max-width: 1366px) {
    margin-left: 60px;
  }

  @media (max-width: 768px) {
    margin: 100px auto 0;
  }

  @media (max-width: 430px) {
    padding: 20px 0 0 0;
  }
`;
