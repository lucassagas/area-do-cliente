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

    input {
      margin-right: 5px;
      appearance: none;
      -webkit-appearance: none;
      height: 15px;
      width: 15px;
      background-color: var(--background);
      border: solid 1px var(--lightgray);
      border-radius: 2px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;

      &::after {
        font-family: 'Font Awesome 5 Free';
        content: '\f00c';
        font-weight: 900;
        font-size: 1rem;
        color: var(--background);

        display: none;
      }
      &:hover {
        background: #a5a5a5;
      }

      &:checked {
        background-color: var(--orange);
      }

      &:checked:after {
        display: block;
      }
    }
  }
`;
