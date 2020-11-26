import { motion } from 'framer-motion';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../../hooks/auth';

import { HiOutlineUser, GrLogout } from '../../../styles/icon';

import { Container, Separator } from './styles';

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
  },
};

const item = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
};

const MyAccountMenu: React.FC = () => {
  const history = useHistory();
  const { signOut } = useAuth();

  return (
    <Container variants={variants} initial="hidden" animate="show">
      <motion.button
        variants={item}
        type="button"
        onClick={() => history.push('/customer')}
      >
        Sua conta <HiOutlineUser size={22} />
      </motion.button>

      <Separator />

      <motion.button variants={item} type="button" onClick={signOut}>
        Sair <GrLogout size={20} color="red" />
      </motion.button>
    </Container>
  );
};

export default MyAccountMenu;
