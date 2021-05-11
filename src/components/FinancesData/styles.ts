import { motion } from 'framer-motion';
import styled from 'styled-components';

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
  margin-bottom: 25px;

  > button {
    width: 130px;
    height: 42px;
    border: 1px solid rgba(112, 112, 112, 0.4);
    border-radius: 6px;
    background: transparent;
    color: var(--text);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.4s;
    gap: 5px;

    > svg {
      display: none;
    }

    &.active {
      border: 1px solid var(--darkgreen);
      transition: all 0.4s;

      > svg {
        color: var(--darkgreen);
        transition: all 0.4s;
        display: block;
      }
    }
  }
`;
export const Title = styled.div`
  color: var(--lighttext);
  background: var(--green);
  max-width: 141px;
  padding: 10px;
  border-radius: 10px;
  font-size: 15px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 20px 0 0;

  > section {
    margin: 10px 10px 10px 0;
    padding: 8px 10px;
    color: var(--lighttext);

    border-radius: 10px;
    background: var(--green);

    max-width: 120px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  > div {
    max-width: 400px;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    border: solid 1px var(--lightgray);
    border-radius: 5px;

    padding: 0 10px;

    > span {
      margin-bottom: -3px;
      z-index: 10;
      padding: 10px 0;
      border-bottom: solid 4px var(--green);
    }

    > strong {
      margin-bottom: -3px;
      z-index: 10;
      padding: 10px 0;
      border-bottom: solid 4px var(--green);
    }
  }
`;

export const TitleBillet = styled.span`
  width: 178px;
  background: var(--darkgreen);
  height: 41px;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-weight: 700;
  color: var(--lighttext);
  margin-bottom: -21.5px;
  z-index: 10;
  position: relative;
`;

export const Container = styled(motion.div)`
  width: 100%;
  max-width: 1630px;
  z-index: -1;
  padding: 30px;
  border-radius: 10px;
  border: solid 1px var(--lightgray);
  margin: auto auto 20px;
  color: var(--text);

  display: flex;
  flex-wrap: nowrap;

  overflow-y: auto;

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
    color: var(--lighttext);

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

export const Modal = styled(motion.div)`
  position: fixed;
  width: 100%;
  height: 100%;
  color: var(--text);

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
    max-width: 800px;
    width: 100%;

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
        color: var(--text);

        &:hover {
          color: var(--error);
          transition: 0.4s;
        }
      }

      > h1 {
        font-weight: 700;
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
          color: var(--text);
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
    color: var(--text);

    font-weight: 300;

    border-radius: 4px;
    border: solid 1px var(--lightgray);

    @media (max-width: 430px) {
      margin-bottom: 10px;
    }

    > svg {
      color: var(--orangeicons);
      margin-right: 5px;
    }
  }

  @media (max-width: 430px) {
    flex-direction: column;
  }
`;
