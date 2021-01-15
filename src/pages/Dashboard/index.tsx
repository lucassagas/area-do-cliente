import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

import CustomerData from '../../components/CustomerData';
import Finances from '../../components/FinancesData';

import ArrowToDown from '../../assets/icons/arrowToDown.svg';

import { HiOutlineUser } from '../../styles/icon';

import bgHome from '../../assets/bg_home.svg';

import {
  Container,
  Content,
  Background,
  ContainerImg,
  RollToDown,
  Main,
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

          <div>
            <img src={ArrowToDown} alt="Seta para baixo" />
            <span>Role para baixo</span>
          </div>
        </Content>

        <Background
          initial={{ opacity: 0, y: 300 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        />

        <ContainerImg>
          <img src={bgHome} alt="logo" />
        </ContainerImg>

        <RollToDown>
          <img src={ArrowToDown} alt="Seta para baixo" />
          <span>Role para baixo</span>
        </RollToDown>
      </Main>

      <section>
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
