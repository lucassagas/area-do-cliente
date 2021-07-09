import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { isAfter, parseISO } from 'date-fns';
import { useCustomer } from '../../hooks/customer';
import { useToast } from '../../hooks/toast';

import FinancesShimmer from '../Shimmer/FinancesData';

import {
  AiOutlineEye,
  FaWhatsapp,
  SiMailDotRu,
  RiFileCopyLine,
  FiXCircle,
  BsCheck,
  RiMoneyDollarCircleLine,
  CgFileDocument,
} from '../../styles/icon';

import {
  Container,
  TitleBillet,
  Card,
  Modal,
  Actions,
  Header,
  FilterContainer,
  Title,
} from './styles';
import api from '../../services/api';
import { useAuth } from '../../hooks/auth';
import { ModalInvoice } from './ModalInvoice';

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
  const [filter, setFilter] = useState('all');
  const { addToast } = useToast();

  const InputRef = useRef<HTMLInputElement>(null);
  const { billets, handleLoadBillets, customer } = useCustomer();
  const { user } = useAuth();

  useEffect(() => {
    if (customer) {
      handleLoadBillets(customer?.contracts[0].id);
    }

    const listener = (e: KeyboardEvent) => {
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
    if (!billet_code) {
      setDisplayModal('nobilletcode');

      return;
    }
    setDisplayModal(billet_code);
    setBilletId(billet_id);
  }, []);

  const redirectToWhatsapp = useCallback(() => {
    window.open(
      'https://api.whatsapp.com/send?phone=554830398888&text=Oi',
      '_blank',
    );
  }, []);

  const sendBilletToEmail = useCallback(async () => {
    try {
      await api.get(`/customers/${user.code}/info/billet/${billetId}`);

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

  const handleConvertBilletToPdf = useCallback(() => {
    api
      .get(`customers/${user.code}/info/billet/${billetId}/archive`)
      .then(response => {
        window.open(response.data.link, '_blank');
      })
      .catch(() => {
        addToast({
          type: 'error',
          title: 'Error',
          description: 'Ocorreu um erro, tente novamente mais tarde',
        });
      });
  }, [addToast, billetId, user.code]);

  if (!billets || !customer) {
    return (
      <>
        <FinancesShimmer rows={10} />
        <FinancesShimmer rows={10} />
      </>
    );
  }

  // const contractDate = customer.contracts[0].ativacao.split('/');
  // const dayContract = contractDate[0].padStart(2, '0');
  // const monthContract = contractDate[1].padStart(2, '0');
  // const yearContract = contractDate[2];

  return (
    <>
      {show && (
        <Header>
          <section>
            <RiMoneyDollarCircleLine size={22} />
            <strong>Faturas</strong>
          </section>
          <div>
            <strong>Contrato: {customer.contracts[0].id}</strong>

            <span>{customer.contracts[0].plan}</span>
          </div>
        </Header>
      )}
      {!show && (
        <FilterContainer>
          <Title>
            <RiMoneyDollarCircleLine size={24} />
            <strong>Faturas</strong>
          </Title>

          <div>
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={filter === 'all' ? 'active' : ''}
            >
              <BsCheck size={22} />
              Todos
            </button>

            <button
              onClick={() => setFilter('overdue')}
              className={filter === 'overdue' ? 'active' : ''}
              type="button"
            >
              <BsCheck size={22} />
              Em atraso
            </button>

            <ModalInvoice />
          </div>
        </FilterContainer>
      )}

      {filter === 'all' && (
        <>
          <TitleBillet
            style={{
              display:
                billets.bol_detached[0] || billets.bol_late[0]
                  ? 'flex'
                  : 'none',
            }}
          >
            Boletos em Atraso
          </TitleBillet>
          <Container
            style={{
              display:
                billets.bol_detached[0] || billets.bol_late[0]
                  ? 'flex'
                  : 'none',
            }}
            variants={variants}
            initial="hidden"
            animate="show"
          >
            {billets.bol_late.map(billet => {
              const date = billet.data_vencimento.split('/');
              const day = date[0].padStart(2, '0');
              const month = date[1].padStart(2, '0');
              const year = date[2];
              const formattedDate = `${day}/${month}/${year}`;

              return (
                <Card key={billet.data_vencimento} variants={item}>
                  <section>
                    <div className="delay" />
                    <h1>Em atraso</h1>
                  </section>
                  <p>Vencimento: {formattedDate}</p>
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

            {billets.bol_detached.map(billet => {
              const date = billet.data_vencimento.split('/');
              const day = date[0].padStart(2, '0');
              const month = date[1].padStart(2, '0');
              const year = date[2];
              const formattedDate = `${day}/${month}/${year}`;

              const parsedDate = `${year}-${month}-${day}`;

              const pastDate = isAfter(parseISO(parsedDate), new Date());

              return pastDate ? null : (
                <Card key={billet.data_vencimento} variants={item}>
                  <section>
                    <div className="delay" />
                    <h1>Em atraso</h1>
                  </section>
                  <p>Vencimento: {formattedDate}</p>
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

          <TitleBillet
            style={{ display: billets.bol_detached[0] ? 'flex' : 'none' }}
          >
            Boletos de serviços
          </TitleBillet>
          <Container
            style={{ display: billets.bol_detached[0] ? 'flex' : 'none' }}
            variants={variants}
            initial="hidden"
            animate="show"
          >
            {billets.bol_detached.map(billet => {
              const date = billet.data_vencimento.split('/');
              const day = date[0].padStart(2, '0');
              const month = date[1].padStart(2, '0');
              const year = date[2];
              const formattedDate = `${day}/${month}/${year}`;

              const parsedDate = `${year}-${month}-${day}`;

              const pastDate = isAfter(parseISO(parsedDate), new Date());

              return pastDate ? (
                <Card key={billet.data_vencimento} variants={item}>
                  <section>
                    <div className="delay" />
                    <h1>Em aberto</h1>
                  </section>
                  <p>Vencimento: {formattedDate}</p>
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
              ) : null;
            })}
          </Container>

          <TitleBillet
            style={{ display: billets.bol_activies[0] ? 'flex' : 'none' }}
          >
            Mensalidade
          </TitleBillet>
          <Container
            style={{ display: billets.bol_activies[0] ? 'flex' : 'none' }}
            variants={variants}
            initial="hidden"
            animate="show"
          >
            {billets.bol_activies.map((billet, index) => {
              const date = billet.data_vencimento.split('/');
              const day = date[0].padStart(2, '0');
              const month = date[1].padStart(2, '0');
              const year = date[2];
              const formattedDate = `${day}/${month}/${year}`;
              return (
                <Card key={billet.data_vencimento} variants={item}>
                  <section>
                    <div />
                    <h1>{index === 0 ? 'Próximo vencimento' : 'Em Aberto'}</h1>
                  </section>
                  <p>Vencimento: {formattedDate}</p>
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
        </>
      )}

      {filter === 'overdue' && (
        <>
          <TitleBillet>Boletos em Atraso</TitleBillet>
          <Container variants={variants} initial="hidden" animate="show">
            {!billets.bol_late[0] && !billets.bol_detached[0] && (
              <strong style={{ marginTop: 10 }}>Não há pendências</strong>
            )}
            {billets.bol_late.map(billet => {
              const date = billet.data_vencimento.split('/');
              const day = date[0].padStart(2, '0');
              const month = date[1].padStart(2, '0');
              const year = date[2];
              const formattedDate = `${day}/${month}/${year}`;
              return (
                <Card key={billet.data_vencimento} variants={item}>
                  <section>
                    <div className="delay" />
                    <h1>Em atraso</h1>
                  </section>
                  <p>Vencimento: {formattedDate}</p>
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

            {billets.bol_detached.map(billet => {
              const date = billet.data_vencimento.split('/');
              const day = date[0].padStart(2, '0');
              const month = date[1].padStart(2, '0');
              const year = date[2];
              const formattedDate = `${day}/${month}/${year}`;

              const parsedDate = `${year}-${month}-${day}`;

              const pastDate = isAfter(parseISO(parsedDate), new Date());

              return pastDate ? null : (
                <Card key={billet.data_vencimento} variants={item}>
                  <section>
                    <div className="delay" />
                    <h1>Em atraso</h1>
                  </section>
                  <p>Vencimento: {formattedDate}</p>
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
        </>
      )}
      <AnimatePresence exitBeforeEnter>
        {displayModal && displayModal !== 'nobilletcode' && (
          <Modal exit={{ opacity: 0 }} key="modalbillets">
            <motion.div
              initial={{ y: -600, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -600, opacity: 0 }}
            >
              <header>
                <h1>Boleto</h1>
                <button onClick={() => setDisplayModal('')} type="button">
                  <FiXCircle size={20} />
                </button>
              </header>
              <div>
                <p>Código de barras para pagamento:</p>
                <section>
                  <input
                    ref={InputRef}
                    type="text"
                    defaultValue={displayModal}
                  />
                </section>

                <Actions>
                  <button onClick={redirectToWhatsapp} type="button">
                    <FaWhatsapp size={20} />
                    Whatsapp
                  </button>

                  <button onClick={sendBilletToEmail} type="button">
                    <SiMailDotRu size={20} />
                    Enviar 2º via por email
                  </button>

                  <button onClick={copyCodeBar} type="button">
                    <RiFileCopyLine size={20} />
                    Copiar Código
                  </button>

                  <button onClick={handleConvertBilletToPdf} type="button">
                    <CgFileDocument size={20} />
                    Baixar boleto (PDF)
                  </button>
                </Actions>
              </div>
            </motion.div>
          </Modal>
        )}

        {displayModal === 'nobilletcode' && (
          <Modal exit={{ opacity: 0 }} key="modalbillets">
            <motion.div
              initial={{ y: -600, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -600, opacity: 0 }}
            >
              <header>
                <h1>Oops!</h1>
                <button onClick={() => setDisplayModal('')} type="button">
                  <FiXCircle size={20} />
                </button>
              </header>
              <div>
                <h1 style={{ marginTop: 20 }}>
                  Esta fatura ainda não esta disponível, tente novamente mais
                  tarde.
                </h1>
              </div>
            </motion.div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default FinancesData;
