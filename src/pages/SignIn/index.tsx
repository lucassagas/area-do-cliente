import React, { useCallback, useRef, useState } from 'react';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import lightLogo from '../../assets/logo_preta.svg';
import darkLogo from '../../assets/logo_branca.svg';
import Button from '../../components/Button';
import CheckboxInput from '../../components/Checkbox';
import Input from '../../components/Input';

import {
  FaFacebookF,
  IoLogoWhatsapp,
  FaTwitter,
  GrInstagram,
  HiOutlineUser,
  VscLock,
  VscColorMode,
  RiGlobalLine,
} from '../../styles/icon';

import { Container, Content, AnimationContainer, IconsMobile } from './styles';

import getValidationErrors from '../../utils/getValidationErrors';

import Carrousel from '../../components/Carrousel';
import { useAuth } from '../../hooks/auth';
import LoadingDots from '../../components/LoadingDots';
import { useToast } from '../../hooks/toast';
import { useTheme } from '../../hooks/themes';
import ChangedPasswordAlert from '../../components/ChangedPasswordAlert';

interface SignInFormData {
  username: string;
  password: string;
  rememberMe?: string[];
}

interface CheckboxOption {
  id: string;
  value: string;
  label: string;
}

const SignIn: React.FC = () => {
  const history = useHistory();
  const formRef = useRef<FormHandles>(null);
  const [showMobileIcons, setShowMobileIcons] = useState(true);

  const { signIn, loading, setLoading, alertPassword } = useAuth();
  const { addToast } = useToast();
  const { toggleChangeTheme, themeName } = useTheme();

  const checkboxOptions: CheckboxOption[] = [
    { id: 'connect', value: 'true', label: 'Mantenha-me conectado' },
  ];

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          username: Yup.string().required('Usuário obrigatório'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          username: data.username,
          password: data.password,
          rememberMe: data.rememberMe,
        });

        history.push('/dashboard');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description: 'Ocorreu um erro ao fazer login, cheque as credênciais.',
        });
        setLoading(false);
      }
    },
    [signIn, addToast, history, setLoading],
  );

  const toggleShowMobileIcons = useCallback(() => {
    setShowMobileIcons(!showMobileIcons);
  }, [showMobileIcons]);

  return (
    <Container>
      <Carrousel />

      <Content>
        <button title="Trocar tema" onClick={toggleChangeTheme} type="button">
          <VscColorMode size={20} color="var(--background)" />
        </button>
        <AnimationContainer>
          {themeName === 'dark' ? (
            <img src={darkLogo} alt="Neorede Telecom" />
          ) : (
            <img src={lightLogo} alt="Neorede Telecom" />
          )}

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Entre com a sua conta</h1>

            <Input
              onFocusCapture={toggleShowMobileIcons}
              onBlurCapture={toggleShowMobileIcons}
              name="username"
              autoComplete="false"
              icon={HiOutlineUser}
              placeholder="Usuário"
            />

            <Input
              onFocusCapture={toggleShowMobileIcons}
              onBlurCapture={toggleShowMobileIcons}
              name="password"
              password
              icon={VscLock}
              placeholder="Senha"
            />

            <CheckboxInput name="rememberMe" options={checkboxOptions} />

            <Button type="submit">
              {loading ? <LoadingDots /> : 'Entrar'}
            </Button>
          </Form>

          <Link to="signup">Não sou cliente, Quero adquirir</Link>
          <Link to="/forgotpassword">Esqueci minha senha</Link>
        </AnimationContainer>

        <IconsMobile display={showMobileIcons}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/Neorede"
          >
            <FaFacebookF size={27} color="var(--text)" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://api.whatsapp.com/send?phone=554830398888&text=Oi"
          >
            <IoLogoWhatsapp size={27} color="var(--text)" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/neorede"
          >
            <FaTwitter size={27} color="var(--text)" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/neoredetelecom/"
          >
            <GrInstagram size={27} color="var(--text)" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.neorede.com.br/"
          >
            <RiGlobalLine size={28} color="var(--text)" />
          </a>
        </IconsMobile>
      </Content>
      {alertPassword && <ChangedPasswordAlert />}
    </Container>
  );
};

export default SignIn;
