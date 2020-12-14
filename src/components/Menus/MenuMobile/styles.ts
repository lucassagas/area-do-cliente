import styled from 'styled-components';

interface IContainerProps {
  display: number;
}

export const MenuButton = styled.button`
  position: fixed;
  height: 30px;
  width: 40px;
  left: 0;
  top: 100px;
  z-index: 10;

  display: none;
  justify-content: center;
  align-items: center;

  border: 0;
  border-radius: 0 10px 10px 0;
  background: var(--orange);
  color: var(--background);

  font-size: 1.1rem;

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const Container = styled.div<IContainerProps>`
  position: fixed;
  width: 100vw;
  height: 100vh;

  top: 0;
  left: ${props => (props.display ? '0' : '-100%;')};
  transition: left 0.4s;

  overflow: hidden;
  z-index: 998;

  background-color: var(--whiteopacity);

  display: none;
  align-items: flex-start;

  > nav {
    position: fixed;

    > button {
      position: absolute;
      top: 10px;
      left: 10px;
      background: transparent;
      border: 0;
    }
    width: 50%;
    background: var(--background);
    height: 100vh;

    border-right: 1px solid var(--lightgray);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > ul {
      list-style: none;

      > li .selected svg {
        color: var(--orange);
      }

      > li a {
        display: flex;
        padding: 20px;
        margin: 20px 0;
        align-items: center;
        justify-content: flex-start;
        text-decoration: none;
        color: var(--text);

        > svg {
          margin-right: 5px;
        }
      }
    }
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;
