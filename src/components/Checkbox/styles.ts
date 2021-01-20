import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  label {
    color: var(--text);
    font-size: 1.6rem;
    font-weight: 300;
    cursor: pointer;
    display: flex;
    align-items: center;

    > button {
      border: 0;
      background: transparent;
      margin-right: 5px;
      > input {
        display: none;
      }
    }
  }
`;
