import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { AiOutlineBell } from '../../../styles/icon';

import info from '../../../assets/icons/info.svg';
import error from '../../../assets/icons/danger.svg';
import success from '../../../assets/icons/check.svg';

import {
  Container,
  Badge,
  NotificationList,
  Scroll,
  Notification,
  NoNotification,
} from './styles';

type NotificationsProps = {
  type?: string;
  title: string;
  description: string;
  read: boolean;
  id: string;
  createdAt: string;
  timeDistance?: string;
};

const Notifications: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [notifications, setNotifications] = useState<NotificationsProps[]>([]);

  const hasUnread = useMemo(
    () => !!notifications.find(notification => notification.read === false),
    [notifications],
  );

  const qtNotification = useMemo(
    () => notifications.filter(n => n.read === false).length,
    [notifications],
  );

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setVisible(false);
      }
    };

    window.addEventListener('keydown', listener);

    // async function loadNotifications() {
    //   const notificationsData = [
    //     {
    //       type: 'info',
    //       title: 'Atenção !',
    //       description: 'Vai ficar de fora dessa ?',
    //       id: 'asdasdasd',
    //       read: false,
    //       createdAt: '2020-06-26 04:07:31',
    //     },
    //     {
    //       type: 'error',
    //       title: 'Atenção !',
    //       description: 'Vai ficar de fora dessa ?',
    //       id: 'asdasdaasd',
    //       read: false,
    //       createdAt: '2021-02-09 17:03:31',
    //     },
    //     {
    //       type: 'success',
    //       title: 'Atenção !',
    //       description: 'Vai ficar de fora dessa ?',
    //       id: 'asdasdasdasd',
    //       read: false,
    //       createdAt: '2014-06-26 04:07:31',
    //     },
    //   ];

    //   const filter = notificationsData.filter(n => n.read === false);

    //   const data = filter.map(notification => ({
    //     ...notification,
    //     timeDistance: formatDistance(
    //       parseISO(notification.createdAt),
    //       new Date(),
    //       { addSuffix: true, locale: pt },
    //     ),
    //   }));
    //   setNotifications(data);
    // }

    // loadNotifications();

    return () => {
      window.removeEventListener('keydown', listener);
    };
  }, []);

  const handleMarkAsRead = useCallback(
    async (idNotification: string) => {
      setNotifications(
        notifications.map(notification =>
          notification.id === idNotification
            ? { ...notification, read: true }
            : notification,
        ),
      );
    },
    [notifications],
  );

  const handleClean = useCallback(
    () =>
      setNotifications(
        notifications.map(notification => ({
          ...notification,
          read: true,
        })),
      ),
    [notifications],
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const icons: any = {
    info: <img src={info} alt="info" />,
    success: <img src={success} alt="check" />,
    error: <img src={error} alt="danger" />,
  };

  return (
    <Container>
      <Badge
        notifications={qtNotification}
        onClick={() => setVisible(!visible)}
        hasUnread={hasUnread}
      >
        <AiOutlineBell size={20} color="var(--text)" />
      </Badge>
      <NotificationList
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        visible={visible}
      >
        <Scroll>
          {qtNotification > 0 && (
            <div>
              <button type="button" onClick={handleClean}>
                Limpar Notificações
              </button>

              <button
                className="close"
                type="button"
                onClick={() => setVisible(false)}
              >
                Fechar
              </button>
            </div>
          )}
          {hasUnread ? (
            notifications.map(
              notification =>
                !notification.read && (
                  <Notification
                    key={notification.id}
                    unread={!notification.read}
                    type={notification.type}
                  >
                    <section>
                      {icons[notification.type || 'info']}
                      <span>
                        <strong>{notification.title}</strong>
                        <p>{notification.description}</p>
                      </span>
                    </section>
                    <div>
                      <time>{notification.timeDistance}</time>
                      <button
                        onClick={() => handleMarkAsRead(notification.id)}
                        type="button"
                      >
                        Marcar como lida.
                      </button>
                    </div>
                  </Notification>
                ),
            )
          ) : (
            <NoNotification>
              <button
                className="close"
                type="button"
                onClick={() => setVisible(false)}
              >
                Fechar
              </button>
              <span>Sem Notificações</span>
            </NoNotification>
          )}
        </Scroll>
      </NotificationList>
    </Container>
  );
};

export default Notifications;
