import React, { useEffect } from 'react';
import Lottie from 'react-lottie';
import { AnimatePresence } from 'framer-motion';
import Cards from './Cards';

import animationData from '../../animations/arrow.json';

import { RiCloseLine } from '../../styles/icon';

import {
  Container,
  Content,
  ContainerCards,
  ContainerTexts,
  Arrow,
} from './styles';
import { usePlans } from '../../hooks/plans';

const ModalPlans: React.FC = () => {
  const { displayModalPlans, setDisplayModalPlans } = usePlans();

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setDisplayModalPlans(false);
      }
    };

    window.addEventListener('keydown', listener);

    return () => {
      window.removeEventListener('keydown', listener);
    };
  }, [setDisplayModalPlans]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <AnimatePresence exitBeforeEnter>
      {displayModalPlans && (
        <Container exit={{ opacity: 0 }} key="modalplans">
          <Content
            initial={{ y: -1600, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -1600, opacity: 0 }}
          >
            <div>
              <RiCloseLine
                size={24}
                onClick={() => setDisplayModalPlans(false)}
              />
              <h1>Beneficios de ser cliente Neorede</h1>
              <p style={{ marginBottom: 40 }}>
                Somente a Neorede Telecom traz essa inovação, ficou fácil ter
                internet de boa qualidade, <br /> pagando menos por isso e com
                mais vantagens.
              </p>
              <strong>
                Arraste para o lado e <br /> conheça nossos Planos
              </strong>
              <ContainerCards>
                <section>
                  <Cards
                    receivedValue="1567"
                    title="Light"
                    price="80,00"
                    download={60}
                    upload={20}
                    router="Roteador Wi-Fi Gratuito"
                    tv
                    drive="10 Giga"
                    paramount
                  />
                  <Arrow>
                    <Lottie options={defaultOptions} width={45} height={45} />
                  </Arrow>
                </section>
                <section>
                  <Cards
                    receivedValue="1568"
                    title="Avançado"
                    price="100,00"
                    download={200}
                    upload={50}
                    router="Roteador Wi-Fi Gratuito"
                    tv
                    drive="10 Giga"
                    paramount
                    noggin
                  />
                  <Arrow>
                    <Lottie options={defaultOptions} width={45} height={45} />
                  </Arrow>
                </section>
                <section>
                  <Cards
                    receivedValue="1576"
                    title="Plus"
                    price="120,00"
                    download={300}
                    upload={50}
                    router="Roteador Wi-Fi Gratuito"
                    tv
                    drive="10 Giga"
                    paramount
                    noggin
                  />
                  <Arrow>
                    <Lottie options={defaultOptions} width={45} height={45} />
                  </Arrow>
                </section>

                <section>
                  <Cards
                    receivedValue="1571"
                    title="Elite"
                    price="150,00"
                    download="Até 1000"
                    upload={300}
                    router="Roteador Wi-Fi Gratuito"
                    tv
                    drive="50 Giga"
                    paramount
                    noggin
                  />
                </section>
              </ContainerCards>
            </div>
            <ContainerTexts>
              <span>*Verifique nossos planos combo disponíveis.</span>
              <span>*Adesão sob consulta.</span>

              <p>
                Nós da Neorede trabalhamos com fibra ponta a ponta, ou seja,
                fibra óptica até dentro da sua casa! Você sabe a importância
                disto? Desta forma entregamos ao cliente transmissões com mais
                segurança, mais velocidade em downloads e uploads, livre de
                interferências eletromagnéticas e também maior capacidade de
                transmissão. Existem provedores que fazem o uso do cabo UTP, bem
                diferente de uma fibra óptica.
              </p>
              <p>
                Além disso, só com a Neorede você tem acesso a aplicativos de
                Streaming de forma gratuita, garantindo seu entretenimento com
                canais abertos, séries, filmes, documentários e desenhos
                infantis.
              </p>
              <p>Tá esperando o que pra vir fazer parte da Neorede?</p>

              <h5>Informações Importante</h5>

              <p>1. A Taxa de Adesão está sujeita a análise de crédito.</p>
              <p>
                2. Todos os planos estão sujeitos a Viabilidade Técnica, esta
                análise não gera custo ao consumidor, é necessário fazê-la para
                confirmar a disponibilidade de atendimento no local e garantia
                da instalação ao cliente na área de cobertura.
              </p>
            </ContainerTexts>
          </Content>
        </Container>
      )}
    </AnimatePresence>
  );
};

export default ModalPlans;
