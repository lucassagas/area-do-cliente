import React, { useCallback, useRef } from 'react';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import logoImg from '../../assets/logo_preta.svg';
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
} from '../../styles/icon';

import { Container, Content, AnimationContainer } from './styles';
import getValidationErrors from '../../utils/getValidationErrors';
import Carrousel from '../../components/Carrousel';

interface SignInFormData {
  user: number;
  password: string;
}

interface CheckboxOption {
  id: string;
  value: string;
  label: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const checkboxOptions: CheckboxOption[] = [
    { id: 'connect', value: 'true', label: 'Mantenha-me conectado' },
  ];

  const handleSubmit = useCallback(async (data: SignInFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        user: Yup.number()
          .required('CPF é obrigatório')
          .typeError('Digite o cpf com apenas números'),

        password: Yup.string().required('Senha é obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      console.log(data);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);

        return;
      }
    }
  }, []);

  return (
    <Container>
      <Carrousel />

      <Content>
        <button type="button">
          <VscColorMode size={20} color="var(--background)" />
        </button>
        <AnimationContainer>
          <img src={logoImg} alt="Neorede Telecom" />

          <Form onSubmit={handleSubmit} ref={formRef}>
            <h1>Entre com a sua conta</h1>

            <Input name="user" icon={HiOutlineUser} placeholder="CPF" />

            <Input
              name="password"
              type="password"
              icon={VscLock}
              placeholder="Senha"
            />

            <CheckboxInput name="rememberMe" options={checkboxOptions} />

            <Button type="submit">Entrar</Button>
          </Form>

          <a href="/">Não sou cliente, Quero adquirir</a>
          <a href="/">Esqueci minha senha</a>

          <section>
            <FaFacebookF size={27} color="var(--text)" />
            <IoLogoWhatsapp size={27} color="var(--text)" />
            <FaTwitter size={27} color="var(--text)" />
            <GrInstagram size={27} color="var(--text)" />
          </section>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignIn;
