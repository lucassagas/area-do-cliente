import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
  position: fixed;

  width: 100vw;
  height: 100vh;

  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;

  background-color: var(--whiteopacity);
  z-index: 9;
`;

export const Content = styled(motion.div)`
  position: relative;
  max-width: 1650px;
  width: 100%;
  max-height: 90vh;
  z-index: 999;

  > div {
    > strong {
      display: none;
    }
  }
  @media (max-width: 430px) {
    max-height: 98vh;
    > div strong {
      display: block;
      margin-bottom: 10px;
      font-weight: 500;
      color: var(--text);
    }
  }

  overflow-y: auto;
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

  background: var(--background);
  border-radius: 10px;
  padding: 20px;
  margin: 0 10px;

  box-shadow: 0 0 16px rgba(0, 0, 0, 0.4);
  > div {
    > svg {
      position: absolute;
      top: 40px;
      right: 20px;

      color: var(--text);
      cursor: pointer;

      &:hover {
        color: var(--error);
        transition: hover 0.3s;
      }
    }

    > h1 {
      font-size: 4rem;
      color: var(--orange);
      margin-left: 20px;
    }

    > p {
      margin-left: 20px;
      margin-bottom: 10px;
      color: var(--text);
    }
  }

  @media (max-width: 1366px) {
    > div {
      > h1 {
        margin-left: 0;
      }

      > p {
        margin-left: 0;
      }
    }
  }

  @media (max-width: 430px) {
    > div {
      > h1 {
        font-size: 2.8rem;
        margin-left: 0;
        margin-bottom: 10px;
      }

      > p {
        margin-left: 0;
        font-size: 1.4rem;
      }
    }
  }
`;
export const ContainerCards = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;
  justify-content: center;

  @media (max-width: 430px) {
    display: grid;
    grid-template-columns: repeat(5, 350px);
    overflow-x: scroll;
    justify-content: flex-start;
    grid-column-gap: 0;
    > section {
      align-items: center;
      display: flex;
      width: 100%;
    }
  }
`;

export const ContainerTexts = styled.div`
  display: flex;
  flex-direction: column;

  > p {
    margin: 10px 0 0 20px;
  }

  > span {
    margin-left: 20px;
    font-size: 15px;
    color: var(--text);

    @media (max-width: 1366px) {
      margin-left: 0;
      font-size: 13px;
    }

    & + span {
      margin-bottom: 30px;
      margin-top: 10px;
    }
  }
`;

export const Arrow = styled.div`
  display: none;
  width: 50px;
  height: 50px;
  border: 1px solid var(--lightgray);
  border-radius: 5px;
  justify-content: center;
  align-items: center;

  margin: 0 10px;

  @media (max-width: 430px) {
    display: flex;
  }
`;
