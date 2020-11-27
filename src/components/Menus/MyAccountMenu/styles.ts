import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
  background: var(--backgroundmenu);
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  border-radius: 10px;
  padding: 5px;
  position: absolute;
  color: var(--lighttext);

  top: calc(100% + 12px);
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 430px) {
    left: 50%;
    transform: translateX(-80%);
  }

  &::before {
    content: '';
    border-style: solid;
    border-color: var(--backgroundmenu) transparent;
    border-width: 0px 6px 6px 6px;
    bottom: 100%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    @media (max-width: 430px) {
      left: 50%;
      transform: translateX(140%);
    }
  }

  > button {
    font-size: 1.6rem;
    white-space: nowrap;
    background: transparent;
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 10px 5px;

    > svg {
      margin-left: 10px;
    }
  }
`;

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  background: var(--lightgray);
`;
