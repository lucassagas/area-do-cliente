import React from 'react';

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
  return (
    <Container variants={variants} initial="hidden" animate="show">
      <Card variants={item}>
        <section>
          <div />
          <h1>Em Aberto</h1>
        </section>
        <p>Vencimento: 29/12/2020</p>
        <span>
          Valor: <strong>R$ 69,90</strong>
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
      <Card variants={item}>
        <section>
          <div />
          <h1>Em Aberto</h1>
        </section>
        <p>Vencimento: 29/12/2020</p>
        <span>
          Valor: <strong>R$ 69,90</strong>
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
      <Card variants={item}>
        <section>
          <div />
          <h1>Em Aberto</h1>
        </section>
        <p>Vencimento: 29/12/2020</p>
        <span>
          Valor: <strong>R$ 69,90</strong>
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
      <Card variants={item}>
        <section>
          <div />
          <h1>Em Aberto</h1>
        </section>
        <p>Vencimento: 29/12/2020</p>
        <span>
          Valor: <strong>R$ 69,90</strong>
        </span>
        <div className="buttons">
          <button type="button">
            <IoMdDownload size={24} />
          </button>
          <button type="button">
            <RiFileCopyLine size={24} />
          </button>
        </div>
      </Card>{' '}
      <Card variants={item}>
        <section>
          <div />
          <h1>Em Aberto</h1>
        </section>
        <p>Vencimento: 29/12/2020</p>
        <span>
          Valor: <strong>R$ 69,90</strong>
        </span>
        <div className="buttons">
          <button type="button">
            <IoMdDownload size={24} />
          </button>
          <button type="button">
            <RiFileCopyLine size={24} />
          </button>
        </div>
      </Card>{' '}
      <Card variants={item}>
        <section>
          <div />
          <h1>Em Aberto</h1>
        </section>
        <p>Vencimento: 29/12/2020</p>
        <span>
          Valor: <strong>R$ 69,90</strong>
        </span>
        <div className="buttons">
          <button type="button">
            <IoMdDownload size={24} />
          </button>
          <button type="button">
            <RiFileCopyLine size={24} />
          </button>
        </div>
      </Card>{' '}
      <Card variants={item}>
        <section>
          <div />
          <h1>Em Aberto</h1>
        </section>
        <p>Vencimento: 29/12/2020</p>
        <span>
          Valor: <strong>R$ 69,90</strong>
        </span>
        <div className="buttons">
          <button type="button">
            <IoMdDownload size={24} />
          </button>
          <button type="button">
            <RiFileCopyLine size={24} />
          </button>
        </div>
      </Card>{' '}
      <Card variants={item}>
        <section>
          <div />
          <h1>Em Aberto</h1>
        </section>
        <p>Vencimento: 29/12/2020</p>
        <span>
          Valor: <strong>R$ 69,90</strong>
        </span>
        <div className="buttons">
          <button type="button">
            <IoMdDownload size={24} />
          </button>
          <button type="button">
            <RiFileCopyLine size={24} />
          </button>
        </div>
      </Card>{' '}
      <Card variants={item}>
        <section>
          <div />
          <h1>Em Aberto</h1>
        </section>
        <p>Vencimento: 29/12/2020</p>
        <span>
          Valor: <strong>R$ 69,90</strong>
        </span>
        <div className="buttons">
          <button type="button">
            <IoMdDownload size={24} />
          </button>
          <button type="button">
            <RiFileCopyLine size={24} />
          </button>
        </div>
      </Card>{' '}
      <Card variants={item}>
        <section>
          <div />
          <h1>Em Aberto</h1>
        </section>
        <p>Vencimento: 29/12/2020</p>
        <span>
          Valor: <strong>R$ 69,90</strong>
        </span>
        <div className="buttons">
          <button type="button">
            <IoMdDownload size={24} />
          </button>
          <button type="button">
            <RiFileCopyLine size={24} />
          </button>
        </div>
      </Card>{' '}
      <Card variants={item}>
        <section>
          <div />
          <h1>Em Aberto</h1>
        </section>
        <p>Vencimento: 29/12/2020</p>
        <span>
          Valor: <strong>R$ 69,90</strong>
        </span>
        <div className="buttons">
          <button type="button">
            <IoMdDownload size={24} />
          </button>
          <button type="button">
            <RiFileCopyLine size={24} />
          </button>
        </div>
      </Card>{' '}
      <Card variants={item}>
        <section>
          <div />
          <h1>Em Aberto</h1>
        </section>
        <p>Vencimento: 29/12/2020</p>
        <span>
          Valor: <strong>R$ 69,90</strong>
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
    </Container>
  );
};

export default FinancesData;
