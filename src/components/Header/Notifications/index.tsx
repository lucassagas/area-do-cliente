import React, { useCallback, useState } from 'react';

import { motion } from 'framer-motion';

import {
  AiOutlineBell,
  IoMdAlert,
  AiFillInfoCircle,
  AiFillCheckCircle,
  AiFillHeart,
} from '../../../styles/icon';

import { Container, Notification, HeartCircle } from './styles';

interface MessageProps {
  messages: Array<{
    type?: 'info' | 'success' | 'error' | 'congratulations';
    title: string;
    description: string;
  }>;
}

const icons = {
  info: <AiFillInfoCircle size={65} />,
  success: <AiFillCheckCircle size={65} />,
  error: <IoMdAlert size={65} />,
  congratulations: (
    <HeartCircle>
      <AiFillHeart size={35} />
    </HeartCircle>
  ),
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
