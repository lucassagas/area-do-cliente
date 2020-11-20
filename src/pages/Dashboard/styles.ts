import styled from 'styled-components';

import { motion } from 'framer-motion';

import CustomerData from '../../components/CustomerData';

import bgHome from '../../assets/bg_home.svg';

export const Container = styled.div`
  padding: 0 60px;

  > section {
    max-width: 1620px;
    margin: auto;
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
  margin-top: 90px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 500px;
  height: 75%;

  @media (max-width: 1920px) {
    max-height: 800px;
  }

  @media (max-width: 1366px) {
    max-height: 650px;
    margin-top: 50px;
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

    svg {
      margin-right: 10px;
      fill: var(--orange);
    }
  }
  @media (max-width: 430px) {
    display: none;
  }
`;

export const YourAccount = styled.div`
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

  color: var(--background);
  font-weight: 700;
  font-size: 2rem;

  > svg {
    margin-right: 10px;
  }
`;

export const Customer = styled(CustomerData)`
  @media (max-width: 430px) {
    display: none;
  }
`;
