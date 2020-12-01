import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1620px;
  width: 100%;
  height: 70px;
  margin: auto;
  border-radius: 10px 10px 0 0;

  background: var(--footer);
  display: flex;
  align-items: center;
  margin-top: 20px;
  justify-content: space-between;

  padding: 20px;

  color: var(--lighttext);

  img {
    width: 100px;
  }

  div {
    display: flex;
    flex-direction: column;
    span {
      font-size: 1rem;

      & + span {
        margin-top: 15px;
      }
    }

    strong {
      font-size: 1rem;
    }
  }

  @media (max-width: 1440px) {
    max-width: 1100px;
  }
`;
