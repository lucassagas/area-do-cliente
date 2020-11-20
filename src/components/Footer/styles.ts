import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 70px;

  background: var(--text);
  display: flex;
  align-items: center;
  margin-top: 20px;
  justify-content: space-between;

  border-radius: 10px 10px 0 0;
  padding: 20px;

  color: var(--background);

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
`;
