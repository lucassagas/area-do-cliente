import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useCustomer } from '../../hooks/customer';
import { useToast } from '../../hooks/toast';

import FinancesShimmer from '../Shimmer/FinancesData';

import {
  AiOutlineEye,
  FaWhatsapp,
  SiMailDotRu,
  RiFileCopyLine,
  FiXCircle,
  FaDollarSign,
} from '../../styles/icon';

import { Container, Card, Modal, Actions, Header } from './styles';
import api from '../../services/api';
import { useAuth } from '../../hooks/auth';

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

interface FinancesProps {
  show?: boolean;
}

interface BilletProps {
  billet_code: string;
  billet_id: string;
}

const FinancesData: React.FC<FinancesProps> = ({ show = false }) => {
  const [displayModal, setDisplayModal] = useState('');
  const [billetId, setBilletId] = useState('');
  const { addToast } = useToast();

  const InputRef = useRef<HTMLInputElement>(null);
  const { billets, handleLoadBillets, customer } = useCustomer();
  const { user } = useAuth();

  useEffect(() => {
    if (customer) {
      handleLoadBillets(customer?.contracts[0].id);
    }

    const listener = (e: any) => {
      if (e.key === 'Escape') {
        setDisplayModal('');
      }
    };

    window.addEventListener('keydown', listener);

    return () => {
      window.removeEventListener('keydown', listener);
    };
  }, [customer, handleLoadBillets]);

  const copyCodeBar = useCallback(() => {
    InputRef.current?.select();

    document.execCommand('copy');

    addToast({
      type: 'success',
      title: 'Copiado !',
      description: 'Código de barra copiado para área de transferencia',
    });
  }, [addToast]);

  const OpenModal = useCallback(({ billet_code, billet_id }: BilletProps) => {
    setDisplayModal(billet_code);
    setBilletId(billet_id);
  }, []);

  const sendBilletToEmail = useCallback(async () => {
    try {
      await api.get(`/customers/customerBilletInfo/${user.code}/${billetId}`);

      addToast({
        type: 'success',
        title: 'Email enviado com succeso!',
        description: 'Segunda via do boleto enviada',
      });
    } catch {
      addToast({
        type: 'error',
        title: 'Error',
        description: 'Ocorreu um erro, tente novamente mais tarde',
      });
    }
  }, [addToast, billetId, user]);

  if (!billets || !customer) {
    return (
      <>
        <FinancesShimmer rows={10} />
        <FinancesShimmer rows={10} />
      </>
    );
  }

  return (
    <>
      {show && (
        <Header>
          <section>
            <FaDollarSign size={25} />
            <strong>Faturas</strong>
          </section>
          <div>
            <strong>Contrato: {customer.contracts[0].id}</strong>

            <span>{customer.contracts[0].ativacao}</span>

            <span>{customer.contracts[0].plan}</span>
          </div>
        </Header>
      )}
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
              <button type="button">
                <AiOutlineEye
                  onClick={() =>
                    OpenModal({
                      billet_code: billet.linha_digitavel,
                      billet_id: billet.id,
                    })
                  }
                  size={24}
                />
              </button>
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
              <button type="button">
                <AiOutlineEye
                  onClick={() =>
                    OpenModal({
                      billet_code: billet.linha_digitavel,
                      billet_id: billet.id,
                    })
                  }
                  size={24}
                />
              </button>
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
              <button type="button">
                <AiOutlineEye
                  onClick={() =>
                    OpenModal({
                      billet_code: billet.linha_digitavel,
                      billet_id: billet.id,
                    })
                  }
                  size={24}
                />
              </button>
            </Card>
          );
        })}
      </Container>
      {displayModal && (
        <Modal>
          <div>
            <header>
              <h1>Boleto</h1>
              <button onClick={() => setDisplayModal('')} type="button">
                <FiXCircle size={20} />
              </button>
            </header>
            <div>
              <p>Código de barras para pagamento:</p>
              <section>
                <input ref={InputRef} type="text" defaultValue={displayModal} />
              </section>

              <Actions>
                <button type="button">
                  <FaWhatsapp size={20} />
                  Whatsapp
                </button>

                <button onClick={sendBilletToEmail} type="button">
                  <SiMailDotRu size={20} />
                  Enviar 2̣° via por email
                </button>

                <button onClick={copyCodeBar} type="button">
                  <RiFileCopyLine size={20} />
                  Copiar Código
                </button>
              </Actions>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default FinancesData;
