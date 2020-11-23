import React from 'react';

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
import { useAuth } from '../../hooks/auth';
import Footer from '../../components/Footer';

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
              Olá <strong>{user.name}</strong>
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
          <HiOutlineUser size={30} color="#FFF" />
          <span>Sua Conta</span>
        </div>
        <CustomerData />

        <div className="YourAccount Green">
          <FaDollarSign size={30} color="#FFF" />
          <span>Fatura</span>
        </div>
        <Finances />
      </section>

      <Footer />
    </Container>
  );
};

export default Dashboard;
