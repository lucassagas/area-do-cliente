import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Overlay = styled(motion.div)`
  position: fixed;

  inset: 0;

  width: 100vw;
  height: 100vh;

  background: rgba(0, 0, 0, 0.6);
  z-index: 20;

  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled(motion.div)`
  max-width: 600px;
  width: 100%;
  margin: 0 10px;

  max-height: 80vh;

  overflow: auto;

  background: var(--background);

  padding: 0 20px 20px;
  border-radius: 12px;

  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 2px gray;
    border-radius: 4px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--orangeicons);
    border-radius: 4px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--orangeicons);
  }

  > header {
    padding: 20px 0;
    width: 100%;
    text-align: center;

    border-bottom: 1px solid var(--lightgray);

    background: var(--background);

    position: sticky;

    top: 0;
    left: 0;

    > h1 {
      font-size: 20px;
    }

    > button {
      position: absolute;

      right: 0;
      top: 15px;

      display: flex;
      align-items: center;
      justify-content: center;

      background: inherit;
      border: 0;

      > svg {
        transition: all 0.3;
        color: var(--text);
      }

      &:hover {
        > svg {
          fill: var(--error);
        }
      }
    }
  }
`;

export const Invoice = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;

  padding: 15px 0;
  border-bottom: 1px solid var(--lightgray);

  > span {
    display: flex;
    align-items: center;
    time {
      margin-right: 1rem;
      color: var(--text);
    }

    p {
      color: var(--text);
    }
  }

  > button {
    width: 34px;
    height: 32px;

    border-radius: 4px;

    background: var(--green);

    border: 0;

    z-index: 3;

    > svg {
      fill: var(--lighttext);
    }
  }
`;

export const Button = styled.button`
  display: flex;
  min-width: 230px;
  background: var(--green) !important;
  color: var(--lighttext) !important;
`;
