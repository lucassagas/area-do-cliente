import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1620px;
  width: 100%;
  margin: auto;
  border-radius: 15px;

  @media (max-width: 1440px) {
    max-width: 1100px;
  }

  @media (max-width: 768px) {
    max-width: 650px;
  }

  @media (max-width: 430px) {
    max-width: 650px;
    padding: 10px;
  }

  > span {
    width: 150px;
    background: var(--green);
    border-radius: 10px;
    padding: 10px;

    color: var(--background);
    font-size: 2rem;

    display: flex;
    justify-content: center;
    align-items: center;

    margin: 30px 0 10px 0;

    @media (max-width: 430px) {
      margin-bottom: -30px;
    }
  }
`;
