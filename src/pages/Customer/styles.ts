import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
  width: 100%;
  height: 100%;
  min-height: 90.2vh;
  color: var(--text);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;

  @media (min-height: 1080px) {
    min-height: 91vh;
  }

  @media (max-width: 1920px) {
    max-width: 1620px;
  }

  @media (max-width: 1440px) {
    max-width: 1230px;
  }

  @media (max-width: 1366px) {
    max-width: 1100px;
  }

  @media (max-width: 430px) {
    padding: 0 10px;
  }

  header {
    display: flex;
    align-items: center;
    padding: 15px 0;
    margin-bottom: 15px;
    border-bottom: solid 1px var(--lightgray);

    > img {
      width: 50px;
      height: 50px;
      flex-shrink: 0;
      border-radius: 50%;
      margin-right: 10px;
    }

    > div {
      display: flex;
      flex-direction: column;

      > span {
        color: var(--orange);
      }
    }
  }
`;
