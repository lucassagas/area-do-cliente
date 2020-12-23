import styled, { keyframes } from 'styled-components';

interface ContainerProps {
  display: boolean;
}

export const appearFromTop = keyframes`
  from {
    margin-top: -300px;
    opacity: 0;
  }

  to {
    top: 0;
    opacity: 1;
  }
`;

export const Container = styled.div<ContainerProps>`
  position: fixed;

  width: 100vw;
  height: 100vh;

  z-index: 11;

  top: 0;
  left: 0;

  display: ${props => (props.display ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;

  background: var(--whiteopacity);

  > form {
    max-width: 600px;
    width: 100%;
    padding: 50px;
    box-shadow: 0px 3px 99px #00000029;
    border-radius: 10px;
    background: var(--background);

    animation: ${appearFromTop} 0.6s;

    > header {
      width: 100%;
      > h1 {
        color: var(--orange);
        font-size: 55px;
        font-weight: bold;
      }

      > p {
        margin-bottom: 50px;
        color: var(--text);
        font-weight: 600;
      }
    }

    > main {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-bottom: 30px;
    }
  }

  @media (max-width: 430px) {
    width: 100%;
    height: 100%;
    > form {
      padding: 10px;
      max-width: 90%;

      > header {
        > h1 {
          font-size: 35px;
        }

        > p {
          font-size: 12px;
        }
      }
    }
  }
`;
