import React, { useCallback, useState } from 'react';

import logoImg from '../../assets/logo.svg';

import { Container } from './styles';

import {
  AiOutlineBell,
  BsGear,
  RiArrowDownSLine,
  VscColorMode,
} from '../../styles/icon';
import MyAccountMenu from '../MyAccountMenu';

const Header: React.FC = () => {
  const [displayMyAccount, setDisplayMyAccount] = useState(false);

  const toggleMyAccount = useCallback(() => {
    console.log('click');
    setDisplayMyAccount(!displayMyAccount);
  }, [displayMyAccount]);

  const toggleMyAccountBlur = useCallback(() => {
    setTimeout(() => {
      setDisplayMyAccount(false);
    }, 200);
  }, []);

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

        <span>Lucas S.</span>
        <img
          src="https://pbs.twimg.com/profile_images/537699494/BartSimpson.jpg"
          alt="Perfil"
        />
        <section className="MyAccount">
          <button
            onClick={toggleMyAccount}
            onBlur={toggleMyAccountBlur}
            type="button"
          >
            <RiArrowDownSLine size={24} />
          </button>
          {displayMyAccount && <MyAccountMenu />}
        </section>
      </div>
    </Container>
  );
};

export default Header;
