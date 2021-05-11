import React from 'react';
import { NavLink } from 'react-router-dom';

import logoImg from '../../../assets/logo.svg';

import {
  VscHome,
  HiOutlineUser,
  RiMoneyDollarCircleLine,
  BiTachometer,
} from '../../../styles/icon';

import { Container } from './styles';

const SideMenu: React.FC = () => {
  return (
    <Container>
      <img src={logoImg} alt="Neorede Telecom" />

      <nav>
        <ul>
          <li>
            <NavLink
              title="Dashboard"
              activeClassName="selected"
              to="/dashboard"
            >
              <VscHome size={25} />
            </NavLink>
          </li>

          <li>
            <NavLink
              title="Meus Dados"
              activeClassName="selected"
              to="/customer"
            >
              <HiOutlineUser size={25} />
            </NavLink>
          </li>

          <li>
            <NavLink
              title="Financeiro"
              activeClassName="selected"
              to="/finances"
            >
              <RiMoneyDollarCircleLine size={27} />
            </NavLink>
          </li>

          <li>
            <NavLink
              title="Teste de Velocidade"
              activeClassName="selected"
              to="/speedtest"
            >
              <BiTachometer size={25} />
            </NavLink>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default SideMenu;
