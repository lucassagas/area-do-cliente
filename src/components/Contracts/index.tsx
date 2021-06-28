import React, { useCallback, useEffect, useState } from 'react';
import { useCustomer } from '../../hooks/customer';
import { useToast } from '../../hooks/toast';
import { useAuth } from '../../hooks/auth';

import ShimmerContracts from '../Shimmer/Contracts';
import api from '../../services/api';
import LoadingDots from '../LoadingDots';

import {
  RiMoneyDollarCircleLine,
  AiOutlineQuestionCircle,
  HiDownload,
} from '../../styles/icon';

import {
  Container,
  Card,
  Title,
  Wrapper,
  ReductionCard,
  Info,
  DownloadButton,
} from './styles';

const Contracts: React.FC = () => {
  const [active, setActive] = useState<string>();
  const [contractStatus, setContractStatus] = useState<string>();
  const { customer, handleLoadBillets, setContractId } = useCustomer();
  const { addToast } = useToast();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleSelectContract = useCallback(
    (data: string) => {
      handleLoadBillets(data);
      setActive(data);
    },
    [handleLoadBillets],
  );

  const handleUnblockCustomer = useCallback(async (): Promise<void> => {
    setLoading(true);
    try {
      const response = await api.get(
        `customers/${user.code}/${active}/trust_unlock`,
      );

      addToast({
        type: 'info',
        title: 'ATENÇÃO',
        description: response.data.result,
        timer: true,
      });
    } catch (err) {
      addToast({
        type: 'error',
        title: 'Error',
        description: err.response ? err.response.data.message : err.message,
        timer: true,
      });
    } finally {
      setLoading(false);
    }
  }, [active, addToast, user.code]);

  const handleRemoveReduction = useCallback(async (): Promise<void> => {
    setLoading(true);
    try {
      const response = await api.get(`customers/${user.code}/${active}/reduce`);

      addToast({
        type: 'info',
        title: 'ATENÇÃO',
        description: response.data.result,
        timer: true,
      });
    } catch (err) {
      addToast({
        type: 'info',
        title: 'ATENÇÃO',
        description: err.response ? err.response.data.message : err.message,
        timer: true,
      });
    } finally {
      setLoading(false);
    }
  }, [active, addToast, user.code]);

  const handleDownloadContract = useCallback(
    async (id: string): Promise<void> => {
      try {
        setLoading(true);

        const response = await api.get(`customers/${user.code}/${id}/term`);

        window.open(response.data.link, 'target_blank');
      } catch (err) {
        addToast({
          type: 'error',
          title: 'Error',
          description: err.response ? err.response?.data.message : err.message,
        });
      } finally {
        setLoading(false);
      }
    },
    [addToast, user.code],
  );

  useEffect(() => {
    if (customer) {
      setActive(customer.contracts[0].id);
      setContractStatus(customer.contracts[0].status);
      setContractId(customer.contracts[0].id);
    }
  }, [customer, setContractId]);

  if (!customer) {
    return <ShimmerContracts />;
  }

  return (
    <Container>
      {contractStatus !== 'A' && (
        <>
          <Title className="large-title">
            <RiMoneyDollarCircleLine size={24} />
            <strong>Desbloqueios de confiança</strong>
          </Title>
          <Wrapper>
            {contractStatus === 'FA' && (
              <ReductionCard>
                <header>
                  <strong>Redução</strong>
                  <Info
                    title="Será efetuada liberação da redução de velocidade de sua conexão.
              Vale lembrar, que as liberações são limitadas, e duram 03 dias, contado a partir do momento que é efetuada liberação. Após este prazo, se não houver compensação do pagamento em questão, sua conexão voltará a ser reduzida."
                  >
                    <AiOutlineQuestionCircle size={20} color="var(--text)" />
                  </Info>
                </header>

                <p>
                  Será efetuada a liberação da redução de <br /> velocidade de
                  sua conexão.
                </p>

                <button type="button" onClick={handleRemoveReduction}>
                  {loading ? (
                    <span>
                      <LoadingDots />
                    </span>
                  ) : (
                    <span>Liberar</span>
                  )}
                </button>
              </ReductionCard>
            )}

            {contractStatus === 'CA' && (
              <ReductionCard className="block">
                <header>
                  <strong>Bloqueio</strong>
                  <Info
                    title="Será efetuado desbloqueio de sua conexão.
                      Vale lembrar, que os desbloqueios são limitados, e duram 03 dias, contando a partir do momento que é efetuado o desbloqueio. Após este prazo, se não houver compensação do pagamento em questão, sua conexão voltará a ser bloqueada."
                  >
                    <AiOutlineQuestionCircle size={20} color="var(--text)" />
                  </Info>
                </header>

                <p>Será efetuado desbloqueio de sua conexão.</p>

                <button onClick={handleUnblockCustomer} type="button">
                  {loading ? (
                    <span>
                      <LoadingDots />
                    </span>
                  ) : (
                    <span>Liberar</span>
                  )}
                </button>
              </ReductionCard>
            )}
          </Wrapper>
        </>
      )}

      <Title>
        <RiMoneyDollarCircleLine size={24} />
        <strong>Contratos</strong>
      </Title>
      <section>
        {customer.contracts.map(contract => {
          // const date = contract.ativacao.split('/');
          // const day = date[0].padStart(2, '0');
          // const month = date[1].padStart(2, '0');
          // const year = date[2];

          // const formattedDate = `${day}/${month}/${year}`;
          return (
            <Card
              onClick={() => {
                handleSelectContract(contract.id);
                setContractId(contract.id);
                setContractStatus(contract.status);
              }}
              key={contract.id}
              type="button"
              className={active === contract.id ? 'active' : ''}
            >
              <h3>{contract.id}</h3>
              {/* <span>ATIVAÇÃO {formattedDate}</span> */}
              <p>{contract.plan}</p>

              <DownloadButton
                onClick={() => handleDownloadContract(contract.id)}
                title="Download Contrato"
                type="button"
              >
                <HiDownload size={24} color="var(--text)" />
              </DownloadButton>
            </Card>
          );
        })}
      </section>
    </Container>
  );
};

export default Contracts;
