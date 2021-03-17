import styled from 'styled-components';

export const Container = styled.div`
  max-width: 320px;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;

  > header {
    background-color: var(--orange);
    color: var(--lighttext);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;

    > h1 {
      color: var(--lighttext);
      font-size: 3rem;
    }

    > strong {
      display: flex;
      color: var(--lighttext);
      margin-top: 10px;

      > h3 {
        color: var(--lighttext);
        font-weight: 700;
      }
    }
  }
`;

export const Body = styled.div`
  padding: 20px;
  border: 1px solid var(--lightgray);
  border-radius: 0 0 10px 10px;
`;

export const Line = styled.div`
  display: flex;
  gap: 10px;
  margin: 25px 0;
  align-items: center;

  > p {
    color: var(--text);
  }

  > svg {
    color: var(--orangeicons);
  }
`;
