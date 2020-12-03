import React from 'react';
import { Link } from 'react-router-dom';

import logoImgBlack from '../../assets/logo_preta.svg';
import notFoundimgBlack from '../../assets/notfoundtextblack.svg';
import logoImgWhite from '../../assets/logo_branca.svg';
import notFoundimgWhite from '../../assets/notfoundtextwhite.svg';

import { useTheme } from '../../hooks/themes';

import { Container } from './styles';
import Footer from '../../components/Footer';

const Page404: React.FC = () => {
  const { themeName } = useTheme();
  return (
    <Container>
      {themeName === 'dark' ? (
        <img src={logoImgWhite} alt="logo neorede" width={180} />
      ) : (
        <img src={logoImgBlack} alt="logo neorede" width={180} />
      )}
      <div>
        {themeName === 'dark' ? (
          <img src={notFoundimgWhite} alt="404 not fount" />
        ) : (
          <img src={notFoundimgBlack} alt="404 not fount" />
        )}
        <section>
          <span>A página requerida nao foi encontrada</span>
          <Link to="/">Voltar para página inicial</Link>
        </section>
      </div>
      <section />
    </Container>
  );
};

export default Page404;
