import styled from 'styled-components';
import Tooltip from '../Tooltip';

export const Container = styled.div`
  width: 100%;
  max-width: 1630px;
  margin: auto auto 20px;
  color: var(--text);

  padding: 10px 20px 20px 0;

  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;

  @media (max-width: 1920px) {
    max-width: 1630px;
  }

  @media (max-width: 1440px) {
    max-width: 1230px;
  }

  @media (max-width: 1366px) {
    max-width: 1100px;
  }

  .active {
    background: var(--lightgreen);
    border-left: 4px solid var(--green);
    border-radius: 0 10px 10px 0;
  }

  h2 {
    margin-bottom: 10px;
  }

  section {
    display: flex;
  }

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

  @media (max-width: 768px) {
    max-width: 600px;

    padding-left: 0;
    margin: 10px 0 0;
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
  margin-bottom: 25px;

  &.large-title {
    max-width: 300px;
  }
`;

export const Card = styled.button`
  min-width: 270px;
  padding: 10px;

  border: solid 1px var(--lightgray);
  border-radius: 10px;

  transition: background 0.5s;
  transition: border 0.4s;
  color: var(--text);

  background: transparent;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 15px;
  flex-direction: column;
  text-align: left;

  position: relative;

  & + button {
    margin-left: 30px;
  }
`;

export const Wrapper = styled.div`
  display: flex;

  @media (max-width: 430px) {
    flex-direction: column;
  }
`;

export const ReductionCard = styled.div`
  border: solid 1px var(--lightgray);
  padding: 10px;
  border-radius: 0 10px 10px 0;
  border-left: 5px solid var(--yellowNotification);
  margin-bottom: 30px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > header {
    display: flex;
    > strong {
      margin-right: 10px;
    }
  }

  > p {
    margin: 10px 0 20px;
  }

  > button {
    width: 100%;
    border-radius: 10px;
    background: var(--yellowNotification);
    border: 0;
    cursor: pointer;
    padding: 10px;
    color: var(--lighttext);
  }

  &.block {
    border-left: 5px solid var(--redNotification);

    > button {
      background: var(--redNotification);
    }
  }

  &:first-child {
    margin-right: 10px;
  }
`;

export const Info = styled(Tooltip)`
  z-index: 11;

  > svg {
    &:hover {
      fill: var(--tooltipbg);

      transition: all 0.3s;
    }
  }
  > span {
    width: 400px;

    z-index: 11;
    background: var(--tooltipbg);
    &::before {
      border-color: var(--tooltipbg) transparent;
    }

    @media (max-width: 1200px) {
      width: 350px;
    }

    @media (max-width: 730px) {
      width: 250px;
    }

    @media (max-width: 430px) {
      width: 250px;
    }
  }
`;

export const DownloadButton = styled.button`
  width: 34px;
  height: 32px;

  border-radius: 4px;

  background: var(--green);

  border: 0;

  position: absolute;

  right: 5px;
  bottom: -16px;
  z-index: 3;

  > svg {
    fill: var(--lighttext);
  }
`;
