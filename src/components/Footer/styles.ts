import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 70px;

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
`;
