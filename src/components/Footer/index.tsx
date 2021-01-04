import React from 'react';

import logoImg from '../../assets/logo_branca.svg';

import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <img src={logoImg} alt="Logo Neorede" />

      <div>
        <span>Version 1.0</span>
        <span>Desenvolvido por:</span>
        <strong>Lucas Sagás, Marcelo Rebelo e Isaque Santos</strong>
      </div>
    </Container>
  );
};

export default Footer;
