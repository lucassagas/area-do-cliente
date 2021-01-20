import styled from 'styled-components';
import { motion } from 'framer-motion';

interface ContainerProps {
  display: boolean;
}

export const Container = styled(motion.div)<ContainerProps>`
  position: fixed;

  width: 100vw;
  height: 100vh;

  z-index: 11;

  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background: var(--whiteopacity);

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

export const AnimatedContainer = styled(motion.div)`
  max-width: 600px;
  width: 100%;
  > form {
    max-width: 600px;
    width: 100%;
    padding: 50px;
    box-shadow: 0px 3px 99px #00000029;
    border-radius: 10px;
    background: var(--background);
    > header {
      position: relative;
      width: 100%;
      > h1 {
        color: var(--orange);
        font-size: 55px;
        font-weight: bold;
      }

      > p {
        margin-bottom: 10px;
        color: var(--text);
        font-weight: 600;

        & + p {
          margin-bottom: 50px;
        }
      }

      > svg {
        position: absolute;
        top: 0;
        right: 0;
        cursor: pointer;

        &:hover {
          color: var(--error) !important;
          transition: 0.2s;
        }
      }
    }

    > main {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-bottom: 30px;
    }
  }
`;
