import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
import { useAuth } from '../../hooks/auth';

import CustomerData from '../../components/CustomerData';
import Finances from '../../components/FinancesData';

import animationData from '../../animations/arrowtodown.json';

import { HiOutlineUser } from '../../styles/icon';

import bgHome from '../../assets/bg_home.svg';

import {
  Container,
  Content,
  Background,
  ContainerImg,
  Main,
  Arrow,
} from './styles';
import FirstAccess from '../../components/FirstAccess';
import { useCustomer } from '../../hooks/customer';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const { setDisplayModalFirstAccess } = useCustomer();

  useEffect(() => {
    if (user.first_access) {
      setDisplayModalFirstAccess(true);
    }
  }, [setDisplayModalFirstAccess, user.first_access]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Container>
      <Main>
        <Content>
          <div>
            <h1>Seja</h1>
            <h1>Bem-Vindo.</h1>

            <span>
              Olá <strong>{user.name_abbreviate}</strong>
            </span>
          </div>

          <Arrow href="#youraccount">
            <Lottie
              isClickToPauseDisabled
              options={defaultOptions}
              width={70}
              height={70}
            />
            <span>Role para baixo</span>
          </Arrow>
        </Content>

        <Background
          initial={{ opacity: 0, y: 300 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        />

        <ContainerImg>
          <img src={bgHome} alt="logo" />
        </ContainerImg>

        {/* <RollToDown>
          <img src={ArrowToDown} alt="Seta para baixo" />
          <span>Role para baixo</span>
        </RollToDown> */}
      </Main>

      <section id="youraccount">
        <div className="YourAccount">
          <HiOutlineUser size={25} color="#FFF" />
          <span>Sua Conta</span>
        </div>
        <CustomerData />

        <Finances show />
        <Link className="SeeMore" to="/finances">
          Ver mais
        </Link>
      </section>
      <FirstAccess title="Primeiro Acesso" />
    </Container>
  );
};

export default Dashboard;
