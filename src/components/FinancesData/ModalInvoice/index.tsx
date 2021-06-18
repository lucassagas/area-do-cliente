import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useCustomer } from '../../../hooks/customer';

import formatValue from '../../../utils/formatValue';
import { MODAL_ANIMATION_INVOICE } from './animation';

import { HiDownload, RiCloseLine } from '../../../styles/icon';
import { Overlay, Wrapper, Invoice, Button } from './styles';

export function ModalInvoice(): JSX.Element | null {
  const [displayModalInvoice, setDisplayModalInvoice] = useState(false);

  const { billets } = useCustomer();
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
              {billets?.bol_pay.map(billet => {
                const date = billet.data_vencimento.split('/');
                const day = date[0].padStart(2, '0');
                const month = date[1].padStart(2, '0');
                const year = date[2];
                const formattedDate = `${day}/${month}/${year}`;

                return (
                  <Invoice key={billet.id}>
                    <span>
                      <time>{formattedDate}</time>
                      <p>Valor: {formatValue(Number(billet.valor))}</p>
                    </span>

                    <button type="button">
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
