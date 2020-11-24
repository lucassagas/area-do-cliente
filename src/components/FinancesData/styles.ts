import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
  width: 100%;
  max-width: 1630px;
  padding: 30px;
  border-radius: 10px;
  border: solid 1px var(--lightgray);
  margin: auto auto 20px;

  display: flex;
  flex-wrap: nowrap;

  overflow-x: auto;
  /* width */
  ::-webkit-scrollbar {
    width: 5px;
    height: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 2px gray;
    border-radius: 4px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--greenopacity);
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--greenopacity);
  }

  @media (max-width: 1440px) {
    max-width: 1100px;
  }

  @media (max-width: 430px) {
    margin-top: 40px;
  }
`;
export const Card = styled(motion.div)`
  position: relative;
  min-width: 280px;
  width: 280px;
  padding: 10px;

  background: var(--backgroundcard);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  border-radius: 10px;
  border: 1px solid var(--lightgray);

  .buttons {
    position: absolute;
    right: 0;
    bottom: -15px;

    > button {
      background: var(--green);
      color: var(--background);

      border-radius: 4px;
      border: 0;
      padding: 0 5px;

      & + button {
        margin-left: 5px;
      }

      > svg {
        margin-top: 4px;
      }
    }
  }

  > section {
    display: flex;
    align-items: center;

    div {
      width: 8px;
      height: 8px;
      border-radius: 4px;
      margin-right: 5px;
      background: var(--orange);
    }
    .delay {
      background: var(--error);
    }
    .pay {
      background: var(--green);
    }
  }

  p {
    margin: 15px 0;
  }
  strong {
    font-size: 2.5rem;
  }

  & + div {
    margin-left: 20px;
  }
`;
