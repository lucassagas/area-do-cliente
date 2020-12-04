import styled, { keyframes } from 'styled-components';

import { motion } from 'framer-motion';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }

  to {
    opacity: 1;
    transform: transformX(0);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 500px;
  margin: auto;

  height: 100vh;
  position: relative;
  padding: 60px;
  overflow: auto;

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

  > form {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    animation: ${appearFromLeft} 1s;

    > header {
      width: 100%;

      > div {
        display: flex;
        align-items: center;
        justify-content: space-between;

        > svg {
          cursor: pointer;
        }
      }

      > section {
        margin-top: 33px;

        > h1 {
          font-weight: 800;
          font-size: 5rem;
          color: var(--orange);
          margin-bottom: 18px;
        }

        > strong {
          color: var(--text);
          font-size: 2rem;
          font-weight: bold;
        }
      }
    }

    .step2,
    .step1 {
      > div {
        margin: 10px 0;
      }
    }

    > main {
      display: flex;
      flex-direction: column;

      > section {
        width: 100%;
        height: 2px;
        border-radius: 4px;
        background: var(--lightgray);
      }

      div {
        margin: 10px 0;
      }

      color: var(--text);
      .inputGroup {
        display: flex;
        gap: 35px;
      }
    }
  }
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 9px;
  background: var(--opacityorange);
  margin: 20px 0px;
  border-radius: 65px;
  display: flex;
`;

export const ContentProgressBar = styled(motion.div)`
  width: 25%;
  background: var(--orange);
  border-radius: 9px 0 0 9px;
  height: 9px;

  & + div {
    border-radius: 0;

    & + div + div {
      border-radius: 0 9px 9px 0;
    }
  }
`;

export const GroupButton = styled.div`
  display: flex;
`;

export const RadioButton = styled.button`
  background: transparent;
  border: 0;
  margin-bottom: 10px;

  display: flex;
  align-items: center;
  gap: 10px;

  & + button {
    margin-left: 20px;
  }

  > div {
    width: 15px;
    height: 15px;
    border: solid 1px var(--lightgray);
    border-radius: 4px;

    &.active {
      background: var(--orange);
    }
  }
`;

export const ContainerCard = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    display: flex;
    gap: 20px;
  }
`;

export const Card = styled.button`
  border-radius: 12px;
  border: solid 1px var(--lightgray);
  min-width: 200px;
  background: transparent;
  margin-top: 30px;

  display: flex;
  align-items: center;

  &.active {
    border-left: 3px solid var(--orange);
    border-radius: 0 12px 12px 0;
    transition: border 0.4s;
  }

  > div {
    padding: 0 20px;

    > span {
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--lighttext);
      border: solid 1px var(--lightgray);
      border-radius: 50%;
      width: 24px;
      height: 24px;

      &.active {
        background: var(--orangeicons);
      }
    }

    & + div {
      padding: 0;
      text-align: left;
    }

    > h1 {
      font-size: 3.8rem;
      color: var(--orange);
    }

    > strong {
      font-size: 1.6rem;
      color: var(--orangeicons);
    }

    > h2 {
      font-size: 2.5rem;
      padding-top: 5px;
    }
  }
`;
