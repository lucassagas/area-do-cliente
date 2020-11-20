import React from 'react';

import { IoIosArrowDropdownCircle, HiOutlineUser } from '../../styles/icon';

import bgHome from '../../assets/bg_home.svg';

import {
  Container,
  Content,
  Background,
  ContainerImg,
  RollToDown,
  Main,
  YourAccount,
  Customer,
} from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Main>
        <Content>
          <div>
            <h1>Seja</h1>
            <h1>Bem-Vindo</h1>

            <span>
              Olá <strong>Lucas Sagás.</strong>
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
        <YourAccount>
          <HiOutlineUser size={30} color="#FFF" />
          <span>Sua Conta</span>
        </YourAccount>
        <Customer />
      </section>
    </Container>
  );
};

export default Dashboard;
