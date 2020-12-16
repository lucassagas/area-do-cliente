import React, { useCallback, useRef } from 'react';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { VscLock, RiArrowLeftSLine } from '../../styles/icon';

import { Container, Content, AnimationContainer } from './styles';

import getValidationErrors from '../../utils/getValidationErrors';

import Carrousel from '../../components/Carrousel';
import { useAuth } from '../../hooks/auth';
import LoadingDots from '../../components/LoadingDots';
import { useToast } from '../../hooks/toast';

interface SignInFormData {
  username: string;
  password: string;
  rememberMe?: string[];
}

const ResetPassword: React.FC = () => {
  const history = useHistory();
  const formRef = useRef<FormHandles>(null);

  const { loading, setLoading } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          password: Yup.string()
            .required('Senha obrigatória')
            .min(6, 'Senha deve conter ao menos 6 caracteres'),
          confirmpassword: Yup.string().oneOf(
            [Yup.ref('password')],
            'Confirmação incorreta',
          ),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        console.log(data);

        addToast({
          type: 'success',
          title: 'Senha alterada.',
          description: 'Sua senha foi alterada com sucesso!',
        });

        history.push('/');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro ao alterar senha',
          description:
            'Ocorreu um erro ao redefinir a senha, tente novamente masi tarde',
        });
        setLoading(false);
      }
    },
    [addToast, history, setLoading],
  );

  return (
    <Container>
      <Carrousel />

      <Content>
        <AnimationContainer>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <header>
              <RiArrowLeftSLine
                size={32}
                color="var(--text)"
                onClick={() => history.push('/')}
              />
              <h1>Redefinir Senha</h1>
              <strong>Crie uma nova senha.</strong>
            </header>

            <main>
              <p>Crie uma nova senha que contenha pelo menos 6 caracteres</p>
              <p>
                Uma senha forte deve ter letras, números, sinais de pontuação e
                símbolos.
              </p>
              <Input
                width="240px"
                name="password"
                icon={VscLock}
                label="Nova Senha"
              />
              <Input
                label="Confirma a senha"
                width="240px"
                name="confirmpassword"
                icon={VscLock}
              />
            </main>

            <Button type="submit">
              {loading ? <LoadingDots /> : 'Redefinir senha'}
            </Button>
          </Form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default ResetPassword;
