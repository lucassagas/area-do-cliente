import styled, { keyframes } from 'styled-components';

import { motion } from 'framer-motion';
import lineBG from '../../assets/bg_linhas.svg';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
  overflow-x: hidden;
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
  max-width: 510px;
  margin: auto;

  height: 100vh;
  position: relative;
  padding: 60px;
  overflow: auto;

  @media (max-width: 430px) {
    padding: 20px;
  }

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
      color: var(--text);
      margin-top: 50px;

      > div {
        display: flex;
        align-items: center;
        justify-content: space-between;

        > svg {
          cursor: pointer;
          color: var(--text);
        }
        > button {
          background: transparent;
          border: 0;
        }
        > button svg {
          color: var(--text);
        }
      }

      > section {
        margin-top: 33px;

        > h1 {
          font-weight: 800;
          font-size: 5rem;
          color: var(--orange);
          margin-bottom: 18px;

          @media (max-width: 430px) {
            font-size: 4rem;
          }
        }

        > strong {
          color: var(--text);
          font-size: 2rem;
          font-weight: bold;
        }

        > p {
          font-size: 1.4rem;
          color: var(--lightgray);
          font-weight: 500;
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

      .cepContainer {
        display: flex;
        align-items: center;
        gap: 10px;

        > button {
          margin-top: 20px;
        }
      }

      > section {
        width: 100%;
        height: 2px;
        border-radius: 4px;
        background: var(--lightgray);
        margin-top: 10px;
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

    > footer {
      > p {
        color: var(--text);
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
  width: 20%;
  background: var(--orange);
  border-radius: 9px 0 0 9px;
  height: 9px;

  & + div {
    border-radius: 0;

    & + div + div + div {
      border-radius: 0 9px 9px 0;
    }
  }
`;

export const GroupButton = styled.div`
  display: flex;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 2px;
    height: 3px;
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
`;

export const RadioButton = styled.button`
  background: transparent;
  border: 0;

  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--text);

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
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(2, 210px);
  grid-gap: 16px;

  @media (max-width: 430px) {
    grid-template-columns: repeat(1, 210px);
  }
`;

export const Card = styled.button`
  border-radius: 12px;
  border: solid 1px var(--lightgray);
  min-width: 200px;
  background: transparent;

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
      color: var(--background);
      border: solid 1px var(--lightgray);
      border-radius: 50%;
      width: 24px;
      height: 24px;

      &.active {
        background: var(--orangeicons);
        color: var(--lighttext);
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

  @media (max-width: 430px) {
    min-width: 250px;
  }
`;

export const Separator = styled.div`
  width: 100%;
  height: 2px;
  background: var(--lightgray);
`;

export const ContainerFinish = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  width: 100%;
  max-width: 500px;
  margin: auto;

  height: 100vh;
  position: relative;
  padding: 60px;
  overflow: auto;

  background-image: url(${lineBG});
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;

  @media (max-width: 430px) {
    padding: 20px;
  }

  > header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--text);
    margin-top: 30px;

    > img {
      width: 100px;
    }

    > svg {
      cursor: pointer;
      &:hover {
        color: var(--error);
        transition: 0.3s;
      }
    }
  }

  > main {
    > h3 {
      color: var(--text);
      font-size: 3rem;
    }

    > h1 {
      color: var(--orange);
      font-size: 5rem;
      font-weight: 800;
    }

    > p {
      color: var(--text);
      margin-top: 20px;
      line-height: 20px;

      > span {
        color: var(--orangeicons);
      }
    }
  }

  > footer {
    > p {
      color: var(--text);
    }
  }
`;

export const KnowMore = styled.div`
  > p button {
    background: transparent;
    border: 0;
    color: var(--orange);
    margin-right: 10px;

    &hover {
      text-decoration: underline;
    }
  }
`;
