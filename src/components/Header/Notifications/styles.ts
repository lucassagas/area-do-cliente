import styled, { css } from 'styled-components';

interface NotificationProps {
  type?: 'info' | 'success' | 'error' | 'congratulations';
}

interface ContainerProps {
  hasNotification: boolean;
}

const backgroundVariations = {
  info: css`
    background: var(--blueNotification);
  `,

  success: css`
    background: var(--greenNotification);
  `,

  error: css`
    background: var(--redNotification);
  `,
  congratulations: css`
    background: var(--orangeicons);
    width: 4px;
  `,
};

export const Container = styled.div<ContainerProps>`
  position: relative;

  > button {
    background: transparent;
    border: 0;
    color: var(--text);
    position: relative;

    &::after {
      background-color: var(--orangeicons);
      width: 12px;
      height: 12px;

      position: absolute;
      top: -3px;
      right: -3px;

      display: ${props => (props.hasNotification ? 'block' : 'none')};

      border-radius: 50%;

      content: '';
    }
  }

  > div {
    width: 600px;
    background: var(--backgroundNotifaction);
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 10px;
    padding: 20px 5px;
    position: absolute;
    color: var(--lighttext);

    top: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);

    @media (max-width: 430px) {
      left: 50%;
      transform: translateX(-15%);
      width: 350px;
    }

    &::before {
      content: '';
      border-style: solid;
      border-color: var(--backgroundNotifaction) transparent;
      border-width: 0px 6px 6px 6px;
      bottom: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);

      @media (max-width: 430px) {
        left: 17%;
        transform: translateX(-100%);
      }
    }
  }
`;

export const Notification = styled.div<NotificationProps>`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  border-radius: 6px;

  background: var(--darkgray);
  width: 550px;
  padding: 5px;

  color: var(--text);

  > img {
    margin: 10px;
    width: 35px !important;
    height: 35px !important;
  }

  & + div {
    margin-top: 10px;
  }

  > section {
    width: 6px;
    height: 77px;
    border-radius: 10px;
    ${props => backgroundVariations[props.type || 'info']};
    margin: 0;
  }

  > div {
    padding: 10px 0;
  }

  @media (max-width: 430px) {
    width: 330px;
  }
`;
