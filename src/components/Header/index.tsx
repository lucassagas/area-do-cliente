import React from 'react';

import logoImg from '../../assets/logo.svg';

import { Container } from './styles';

import {
  AiOutlineBell,
  BsGear,
  RiArrowDownSLine,
  VscColorMode,
} from '../../styles/icon';

const Header: React.FC = () => {
  return (
    <Container>
      <img src={logoImg} alt="Logo" />
      <div>
        <button type="button">
          <AiOutlineBell size={19} />
        </button>
        <button type="button">
          <VscColorMode size={19} />
        </button>

        <button type="button">
          <BsGear size={19} />
        </button>
        <span>Lucas S.</span>
        <img
          src="https://pbs.twimg.com/profile_images/537699494/BartSimpson.jpg"
          alt="Perfil"
        />
        <button type="button">
          <RiArrowDownSLine size={20} />
        </button>
      </div>
    </Container>
  );
};

export default Header;
