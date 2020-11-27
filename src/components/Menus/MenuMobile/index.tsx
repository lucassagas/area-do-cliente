import React, { useCallback, useState } from 'react';

import { NavLink } from 'react-router-dom';

import {
  VscHome,
  HiOutlineUser,
  FaDollarSign,
  FiXCircle,
  FiMenu,
  GiSpeedometer,
} from '../../../styles/icon';

import { Container, MenuButton } from './styles';

const MenuMobile: React.FC = () => {
  const [display, setDisplay] = useState(false);

  const toggleMenu = useCallback(() => {
    setDisplay(!display);
  }, [display]);

  return (
    <>
      <MenuButton onClick={toggleMenu} type="button">
        <FiMenu size={20} />
      </MenuButton>
      <Container onClick={toggleMenu} display={display}>
        <nav>
          <button type="button" onClick={toggleMenu}>
            <FiXCircle size={25} />
          </button>
          <ul>
            <li>
              <NavLink
                onClick={toggleMenu}
                activeClassName="selected"
                to="/dashboard"
              >
                <VscHome size={23} />
                Início
              </NavLink>
            </li>

            <li>
              <NavLink
                onClick={toggleMenu}
                activeClassName="selected"
                to="/customer"
              >
                <HiOutlineUser size={23} />
                Sua Conta
              </NavLink>
            </li>

            <li>
              <NavLink
                onClick={toggleMenu}
                activeClassName="selected"
                to="finances"
              >
                <FaDollarSign size={23} />
                Faturas
              </NavLink>
            </li>

            <li>
              <NavLink
                onClick={toggleMenu}
                activeClassName="selected"
                to="speedtest"
              >
                <GiSpeedometer size={25} />
                Teste de velocidade
              </NavLink>
            </li>
          </ul>
        </nav>
      </Container>
    </>
  );
};

export default MenuMobile;
