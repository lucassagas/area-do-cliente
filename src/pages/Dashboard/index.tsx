import React from 'react';

import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

import CustomerData from '../../components/CustomerData';
import Finances from '../../components/FinancesData';

import {
  IoIosArrowDropdownCircle,
  HiOutlineUser,
  FaDollarSign,
} from '../../styles/icon';

import bgHome from '../../assets/bg_home.svg';

import {
  Container,
  Content,
  Background,
  ContainerImg,
  RollToDown,
  Main,
} from './styles';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <Container>
      <Main>
        <Content>
          <div>
            <h1>Seja</h1>
            <h1>Bem-Vindo</h1>

            <span>
              Olá <strong>{user.name_abbreviate}</strong>
            </span>
          </div>

          <div>
            <IoIosArrowDropdownCircle size={30} />
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
          <IoIosArrowDropdownCircle size={40} />
          <span>Role para baixo</span>
        </RollToDown>
      </Main>

      <section>
        <div className="YourAccount">
          <HiOutlineUser size={25} color="#FFF" />
          <span>Sua Conta</span>
        </div>
        <CustomerData />

        <Finances />
        <Link className="SeeMore" to="/finances">
          Ver mais
        </Link>
      </section>
    </Container>
  );
};

export default Dashboard;
