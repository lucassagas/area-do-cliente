import React from 'react';
import { NavLink } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';

import {
  VscHome,
  HiOutlineUser,
  FaDollarSign,
  GiSpeedometer,
} from '../../styles/icon';

import { Container } from './styles';

const SideMenu: React.FC = () => {
  return (
    <Container>
      <img src={logoImg} alt="Neorede Telecom" />

      <nav>
        <ul>
          <li>
            <NavLink activeClassName="selected" to="/dashboard">
              <VscHome size={25} />
            </NavLink>
          </li>

          <li>
            <NavLink activeClassName="selected" to="/customer">
              <HiOutlineUser size={25} />
            </NavLink>
          </li>

          <li>
            <NavLink activeClassName="selected" to="/finances">
              <FaDollarSign size={25} />
            </NavLink>
          </li>

          {/* <li>
            <NavLink activeClassName="selected" to="/login">
              <GiSpeedometer size={25} />
            </NavLink>
          </li> */}
        </ul>
      </nav>
    </Container>
  );
};

export default SideMenu;
