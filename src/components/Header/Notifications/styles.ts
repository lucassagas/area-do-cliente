import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

type BadgeProps = {
  notifications: number;
  hasUnread: boolean;
};

type NotificationListProps = {
  visible: boolean;
};

type NotificationProps = {
  unread: boolean;
  type?: string;
};

const backgroundVariants: any = {
  error: css`
    border-bottom: solid 3px var(--redNotification);
  `,
  info: css`
    border-bottom: solid 3px var(--blueNotification);
  `,
  success: css`
    border-bottom: solid 3px var(--greenNotification);
  `,
};

export const Container = styled.div`
  position: relative;
`;

export const Badge = styled.div<BadgeProps>`
  position: relative;
  background: none;
  border: 0;

  ${props =>
    props.hasUnread &&
    css`
      &::after {
        position: absolute;
        right: -2px;
        top: -2px;
        width: 14px;
        height: 14px;
        background: red;
        content: '${props.notifications >= 10 ? '' : props.notifications}';
        font-size: 11px;
        color: var(--lighttext);
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;
      }
    `}
`;

export const NotificationList = styled(motion.div)<NotificationListProps>`
  position: absolute;
  width: 480px;
  left: calc(50% - 230px);
  top: calc(100% + 15px);
  background: var(--backgroundNotification);
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.15);
  z-index: 1;
  border-radius: 4px;
  padding: 15px 5px;
  display: ${props => (props.visible ? 'block' : 'none')};

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 20px);
    top: -10px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid var(--backgroundNotification);
  }
`;

export const Scroll = styled.div`
  max-height: 310px;
  overflow: auto;
  padding: 5px 15px;

  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;

    > button {
      border: 0;
      background: none;
      font-weight: 600;
      font-size: 13px;
      color: var(--text);
    }
  }

  & {
    ::-webkit-scrollbar-track {
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 5px;
    }
    ::-webkit-scrollbar {
      width: 6px;
      border-radius: 5px;
      background: rgba(255, 255, 255, 0.1);
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 5px;
      background: rgba(0, 0, 0, 0.6);
    }
  }
`;

export const Notification = styled(motion.div)<NotificationProps>`
  color: var(--text);
  margin-top: 15px;

  background: var(--background);

  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);

  padding: 10px;
  border-radius: 10px;

  display: flex;
  flex-direction: column;

  > section {
    margin-top: 10px;
    display: flex;
    align-items: center;
    > img {
      width: 35px;
    }

    > span {
      > strong {
        font-weight: 500;
        color: var(--text);
        font-size: 1.4rem;
        line-height: 25px;
      }

      > p {
        color: var(--text);
        font-size: 1.5rem;
        font-weight: 300;
      }
    }
  }

  > div {
    display: flex;
    margin-top: 20px;

    > button {
      background: none;
      border: 0;
      font-size: 1.4rem;
      opacity: 0.6;
      display: block;
      margin-bottom: 5px;
      width: 50%;
      text-align: center;
      color: var(--text);
    }

    > time {
      font-size: 1.4rem;
      opacity: 0.6;
      display: block;
      margin-bottom: 5px;
      width: 50%;
      text-align: center;
      border-right: 2px solid var(--text);
    }
  }

  ${props => backgroundVariants[props.type || 'info']}
`;

export const NoNotification = styled.div`
  display: flex;
  flex-direction: column;

  > button {
    margin-left: auto;
  }
`;
