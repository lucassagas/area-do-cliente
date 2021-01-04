import React from 'react';

import { useHistory } from 'react-router-dom';
import paramountLogoImgDark from '../../assets/paramountmais_dark.svg';
import nogginLogoImgDark from '../../assets/logo_noggin_dark.svg';
import neoClienteLogoImgDark from '../../assets/logo_neoredecliente_dark.svg';
import paramountLogoImgLight from '../../assets/paramountmais_light.svg';
import nogginLogoImgLight from '../../assets/logo_noggin_light.svg';
import neoClienteLogoImgLight from '../../assets/logo_neoredecliente_light.svg';

import { RiCloseLine } from '../../styles/icon';

import { Container, Content, Services } from './styles';
import { useTheme } from '../../hooks/themes';

const ChangedPasswordAlert: React.FC = () => {
  const { themeName } = useTheme();
  const history = useHistory();
  return (
    <Container>
      <Content>
        <h1>Senha alterada</h1>
        <h1>com sucesso</h1>

        <RiCloseLine
          onClick={() => history.go(0)}
          size={24}
          color="var(--text)"
        />

        <strong>Atenção!</strong>
        <p>
          Para utilizar os serviços abaixo, utilize a nova senha cadastrada.
        </p>

        <Services>
          <img
            src={
              themeName === 'dark'
                ? neoClienteLogoImgLight
                : neoClienteLogoImgDark
            }
            alt="Noggin Logo"
          />
          <img
            src={
              themeName === 'dark'
                ? paramountLogoImgLight
                : paramountLogoImgDark
            }
            alt="Paramount Logo"
          />
          <img
            src={themeName === 'dark' ? nogginLogoImgLight : nogginLogoImgDark}
            alt="NeoCliente Logo"
          />
        </Services>
      </Content>
    </Container>
  );
};

export default ChangedPasswordAlert;
