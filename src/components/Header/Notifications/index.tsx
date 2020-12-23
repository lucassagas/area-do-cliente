import React, { useCallback, useEffect, useState } from 'react';

import { motion } from 'framer-motion';

import { AiOutlineBell, FaTrashAlt } from '../../../styles/icon';

import check from '../../../assets/icons/check.svg';
import danger from '../../../assets/icons/danger.svg';
import info from '../../../assets/icons/info.svg';
import love from '../../../assets/icons/love.svg';

import { Container, Notification } from './styles';
import api from '../../../services/api';
import { useAuth } from '../../../hooks/auth';

interface MessageProps {
  messages: Array<{
    id: string;
    type: 'info' | 'success' | 'error' | 'congratulations';
    title: string;
    description: string;
    read: boolean;
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
  const [hasNotification, setHasNotification] = useState<number>(0);

  const { user } = useAuth();

  const toggleNotification = useCallback(() => {
    setDisplayNotifications(!displayNotifications);
  }, [displayNotifications]);

  const readNotification = useCallback(
    async (id: string) => {
      await api.put('notifications_read', {
        id_customer: user.id,
        id_notification: id,
      });
    },
    [user.id],
  );

  const toggleNotificationBlur = useCallback(() => {
    setTimeout(() => {
      setDisplayNotifications(false);
    }, 200);
  }, []);

  useEffect(() => {
    api.get(`notifications_read/${user.id}/check_unread`).then(response => {
      setHasNotification(response.data);
    });
  }, [user.id]);

  return (
    <Container hasNotification={hasNotification}>
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
            return message.read ? null : (
              <Notification key={message.description} type={message.type}>
                <section />
                {icons[message.type || 'info']}
                <div>
                  <strong>{message.title}</strong>
                  <p>{message.description}</p>
                </div>
                <FaTrashAlt
                  onClick={() => readNotification(message.id)}
                  size={19}
                  color="var(--error)"
                />
              </Notification>
            );
          })}
        </motion.div>
      )}
    </Container>
  );
};

export default Notifications;
