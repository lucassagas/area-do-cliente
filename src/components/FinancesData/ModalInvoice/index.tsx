import React, { useCallback, useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useCustomer } from '../../../hooks/customer';

import formatValue from '../../../utils/formatValue';
import { MODAL_ANIMATION_INVOICE } from './animation';

import { HiDownload, RiCloseLine } from '../../../styles/icon';
import { Overlay, Wrapper, Invoice, Button } from './styles';
import api from '../../../services/api';
import { useToast } from '../../../hooks/toast';
import { useAuth } from '../../../hooks/auth';

interface InvoiceProps {
  id: string;
  data_emissao: string;
  valor_total: string;
}

export function ModalInvoice(): JSX.Element | null {
  const [displayModalInvoice, setDisplayModalInvoice] = useState(false);
  const [loading, setLoading] = useState(false);
  const [invoices, setInvoices] = useState<InvoiceProps[]>();
  const { addToast } = useToast();
  const { contractId } = useCustomer();
  const { user } = useAuth();

  useEffect(() => {
    api
      .get(`/customers/${user?.code}/info/financial/${contractId}/invoices`)
      .then(response => {
        setInvoices(response.data);
      })
      .catch(err => {
        addToast({
          type: 'error',
          title: 'Error',
          description: err.response ? err.response?.data.message : err.message,
        });
      });
  }, [addToast, contractId, user]);

  const handleDownloadInvoice = useCallback(
    async (id: string): Promise<void> => {
      setLoading(true);
      try {
        const { data } = await api.get(
          `/customers/${user?.code}/info/financial/invoice/${id}/archive`,
        );

        window.open(data.link, 'target_blank');
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
    [addToast, user],
  );

  return (
    <>
      <Button onClick={() => setDisplayModalInvoice(true)} type="button">
        Histórico de pagamentos
      </Button>
      <AnimatePresence>
        {displayModalInvoice && (
          <Overlay exit={{ opacity: 0 }}>
            <Wrapper
              variants={MODAL_ANIMATION_INVOICE}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <header>
                <h1>Histórico de Pagamentos</h1>
                <button
                  onClick={() => setDisplayModalInvoice(false)}
                  type="button"
                >
                  <RiCloseLine size={24} />
                </button>
              </header>
              {invoices?.map(invoice => {
                const date = invoice.data_emissao.split('-');
                const day = date[0].padStart(2, '0');
                const month = date[1].padStart(2, '0');
                const year = date[2];
                const formattedDate = `${year}/${month}/${day}`;

                return (
                  <Invoice loading={loading} key={invoice.id}>
                    <span>
                      <time>{formattedDate}</time>
                      <p>Valor: {formatValue(Number(invoice.valor_total))}</p>
                    </span>

                    <button
                      onClick={() => handleDownloadInvoice(invoice.id)}
                      type="button"
                    >
                      <HiDownload size={24} />
                    </button>
                  </Invoice>
                );
              })}
            </Wrapper>
          </Overlay>
        )}
      </AnimatePresence>
    </>
  );
}
