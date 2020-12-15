import styled from 'styled-components';

import { motion } from 'framer-motion';

import bgHome from '../../assets/bg_home.svg';

export const Container = styled.div`
  padding: 0 0px;
  color: var(--text);
  max-width: 1620px;
  margin: auto;

  > section {
    max-width: 1620px;
    margin: auto;

    > .SeeMore {
      max-width: 110px;
      padding: 5px 10px;
      color: var(--lighttext);
      border: 0;
      background: var(--green);
      float: right;
      border-radius: 6px;
      margin-top: -10px;
      text-decoration: none;
    }

    @media (max-width: 1366px) {
      max-width: 1100px;
      margin: auto;
    }

    @media (max-width: 430px) {
      display: none;
    }

    .YourAccount {
      @media (max-width: 430px) {
        display: none;
      }

      padding: 10px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--purple);

      max-width: 170px;
      margin-bottom: 10px;

      color: var(--lighttext);
      font-weight: 700;
      font-size: 2rem;

      > svg {
        margin-right: 10px;
      }
    }

    .Green {
      background: var(--green);
      margin-top: 50px;
      max-width: 140px;
    }
  }

  @media (max-width: 430px) {
    padding: 0 10px;
  }
`;

export const Main = styled.div`
  width: 100%;
  height: 100vh;
  margin: auto;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (max-width: 430px) {
    padding: 0 20px;
  }
`;

export const Content = styled.div`
  max-width: 500px;
  width: 100%;
  margin-top: 25vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 60%;

  > div {
    > img {
      width: 30px !important;
      height: 30px !important;
      margin-top: 2px;
      margin-right: 10px;
    }
  }

  @media (max-width: 1920px) {
    max-height: 800px;
  }

  @media (max-width: 1440px) {
    max-height: 700px;
    margin-top: 15vh;
    height: 70%;
  }

  @media (max-width: 1200px) {
    max-width: 350px;
  }

  @media (max-width: 768px) {
    max-height: 300px;
    max-width: 600px;
  }

  @media (max-width: 430px) {
    padding-top: 0;
    margin-top: 20px;
  }

  h1 {
    font-size: 8rem;
    letter-spacing: -2px;
    line-height: 100px;

    @media (max-width: 1200px) {
      font-size: 6rem;
    }

    @media (max-width: 768px) {
      line-height: 90px;
      font-size: 9rem;
    }

    @media (max-width: 430px) {
      line-height: 80px;
      font-size: 6rem;
      display: block;
      width: 360px;
    }

    & + h1 {
      margin-bottom: 40px;

      @media (max-width: 430px) {
        margin-bottom: 20px;
      }
    }
  }

  span {
    font-size: 3rem;
    font-weight: 300;

    > strong {
      font-size: 3rem;
    }
  }

  div + div {
    margin-bottom: 40px;
    display: flex;

    svg {
      fill: var(--orange);
      margin-right: 10px;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const Background = styled(motion.div)`
  margin-top: 40px;
  flex: 1;
  background: url(${bgHome}) no-repeat;
  background-size: 82%;
  background-position: right top;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ContainerImg = styled.div`
  display: none;
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 20px;

    img {
      max-width: 700px;
    }
  }

  @media (max-width: 430px) {
    width: 360px;
    margin: -40px auto 0;
    img {
      max-width: 360px;
    }
  }
`;

export const RollToDown = styled.div`
  display: none;
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    font-size: 2.5rem;

    > img {
      width: 22px !important;
      height: 22px !important;
      margin-top: 2px;
      margin-right: 10px;
    }
  }
`;
