import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
  width: 100%;
  height: 100%;
  padding: 0 60px;
  min-height: 90.2vh;
  color: var(--text);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-height: 1080px) {
    min-height: 91vh;
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
