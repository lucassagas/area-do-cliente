import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

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

  > button {
    position: absolute;
    right: 10px;
    bottom: -15px;
    background: var(--green);
    color: var(--background);

    border-radius: 4px;
    border: 0;
    padding: 0 5px;

    > svg {
      margin-top: 4px;
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

const animetop = keyframes`
  from {
    margin-top: -300px;
    opacity: 0;
  }

  to {
    top: 0;
    opacity: 1;
  }
`;

export const Modal = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;

  left: 0;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
  z-index: 50;

  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.6);

  > div {
    max-width: 600px;
    width: 100%;

    animation: ${animetop} 0.6s;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background: var(--backgroundcard);

    border-radius: 10px;

    padding: 20px;

    > svg {
      margin: 20px 0;
    }

    > header {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      position: relative;
      > button {
        position: absolute;
        right: -5px;
        top: -5px;
        background: transparent;
        border: 0;

        &:hover {
          color: var(--error);
          transition: 0.4s;
        }
      }

      > h1 {
        font-weight: 900;
        font-size: 2.5rem;
      }
    }

    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 100%;

      > p {
        margin: 10px 0;
      }

      > section {
        background: var(--background);

        padding: 10px;

        border-radius: 10px;
        border: solid 1px var(--lightgray);

        text-align: center;
        margin-bottom: 20px;
        width: 90%;

        > input {
          background: transparent;
          border: none;
          width: 100%;
          font-size: 1.4rem;
          text-align: center;
        }
      }
    }
  }
`;

export const Actions = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px 5px;
    background: transparent;

    font-weight: 300;

    border-radius: 4px;
    border: solid 1px var(--lightgray);

    > svg {
      color: var(--orangeicons);
      margin-right: 5px;
    }
  }

  @media (max-width: 430px) {
    flex-direction: column;
    gap: 10px;
  }
`;
