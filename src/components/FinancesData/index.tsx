import React, { useEffect } from 'react';
import { useCustomer } from '../../hooks/customer';

import { IoMdDownload, RiFileCopyLine } from '../../styles/icon';

import { Container, Card } from './styles';

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const FinancesData: React.FC = () => {
  const { billets, handleLoadBillets, customer } = useCustomer();

  useEffect(() => {
    if (customer) {
      handleLoadBillets(customer?.contracts[0].id);
    }
  }, [customer, handleLoadBillets]);

  if (!billets) {
    return <h1>loading</h1>;
  }

  return (
    <>
      <Container
        style={{ display: billets.bol_late[0] ? 'flex' : 'none' }}
        variants={variants}
        initial="hidden"
        animate="show"
      >
        {billets.bol_late.map(billet => {
          return (
            <Card key={billet.data_vencimento} variants={item}>
              <section>
                <div className="delay" />
                <h1>Em atraso</h1>
              </section>
              <p>Vencimento: {billet.data_vencimento}</p>
              <span>
                Valor: <strong>R$ {billet.valor.replace('.', ',')}</strong>
              </span>
              <div className="buttons">
                <button type="button">
                  <IoMdDownload size={24} />
                </button>
                <button type="button">
                  <RiFileCopyLine size={24} />
                </button>
              </div>
            </Card>
          );
        })}
      </Container>

      <Container
        style={{ display: billets.bol_activies[0] ? 'flex' : 'none' }}
        variants={variants}
        initial="hidden"
        animate="show"
      >
        {billets.bol_activies.map(billet => {
          return (
            <Card key={billet.data_vencimento} variants={item}>
              <section>
                <div />
                <h1>Em Aberto</h1>
              </section>
              <p>Vencimento: {billet.data_vencimento}</p>
              <span>
                Valor: <strong>R$ {billet.valor.replace('.', ',')}</strong>
              </span>
              <div className="buttons">
                <button type="button">
                  <IoMdDownload size={24} />
                </button>
                <button type="button">
                  <RiFileCopyLine size={24} />
                </button>
              </div>
            </Card>
          );
        })}
      </Container>

      <Container
        style={{ display: billets.bol_pay[0] ? 'flex' : 'none' }}
        variants={variants}
        initial="hidden"
        animate="show"
      >
        {billets.bol_pay.map(billet => {
          return (
            <Card key={billet.data_vencimento} variants={item}>
              <section>
                <div className="pay" />
                <h1>Boletos pagos</h1>
              </section>
              <p>Vencimento: {billet.data_vencimento}</p>
              <span>
                Valor: <strong>R$ {billet.valor.replace('.', ',')}</strong>
              </span>
              <div className="buttons">
                <button type="button">
                  <IoMdDownload size={24} />
                </button>
                <button type="button">
                  <RiFileCopyLine size={24} />
                </button>
              </div>
            </Card>
          );
        })}
      </Container>
    </>
  );
};

export default FinancesData;
