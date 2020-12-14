import React, { useCallback, useState } from 'react';

import { motion } from 'framer-motion';

import { AiOutlineBell } from '../../../styles/icon';

import check from '../../../assets/icons/check.svg';
import danger from '../../../assets/icons/danger.svg';
import info from '../../../assets/icons/info.svg';
import love from '../../../assets/icons/love.svg';

import { Container, Notification } from './styles';

interface MessageProps {
  messages: Array<{
    type: 'info' | 'success' | 'error' | 'congratulations';
    title: string;
    description: string;
  }>;
}

const icons = {
  info: <img src={info} alt="info" />,
  success: <img src={check} alt="check" />,
  error: <img src={danger} alt="danger" />,
  congratulations: <img src={love} alt="love" />,
};

const Notifications: React.FC<MessageProps> = ({ messages }) => {
  const [displayNotifications, setDisplayNotifications] = useState(false);

  const toggleNotification = useCallback(() => {
    setDisplayNotifications(!displayNotifications);
  }, [displayNotifications]);

  const toggleNotificationBlur = useCallback(() => {
    setTimeout(() => {
      setDisplayNotifications(false);
    }, 200);
  }, []);

  return (
    <Container>
      <button
        onBlur={toggleNotificationBlur}
        onClick={toggleNotification}
        type="button"
      >
        <AiOutlineBell size={19} />
      </button>

      {displayNotifications && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {messages.map(message => {
            return (
              <Notification key={message.description} type={message.type}>
                <section />
                {icons[message.type || 'info']}
                <div>
                  <strong>{message.title}</strong>
                  <p>{message.description}</p>
                </div>
              </Notification>
            );
          })}
        </motion.div>
      )}
    </Container>
  );
};

export default Notifications;
