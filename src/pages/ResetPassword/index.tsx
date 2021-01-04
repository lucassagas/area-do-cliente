import React, { useCallback, useRef } from 'react';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { useHistory, useParams } from 'react-router-dom';
import Button from '../../components/Button';
import Input from '../../components/Input';
import InputMask from '../../components/InputMask';

import { VscLock, RiArrowLeftSLine, HiOutlineUser } from '../../styles/icon';

import { Container, Content, AnimationContainer } from './styles';

import getValidationErrors from '../../utils/getValidationErrors';

import Carrousel from '../../components/Carrousel';
import { useAuth } from '../../hooks/auth';
import LoadingDots from '../../components/LoadingDots';
import { useToast } from '../../hooks/toast';
import api from '../../services/api';

interface PasswordParamsData {
  code: string;
}

interface ResetPasswordData {
  cpf: string;
  password: string;
  confirmpassword: string;
}

const ResetPassword: React.FC = () => {
  const history = useHistory();
  const formRef = useRef<FormHandles>(null);

  const { loading, setLoading, setAlertPassword } = useAuth();
  const { addToast } = useToast();
  const params = useParams<PasswordParamsData>();

  const handleSubmit = useCallback(
    async (data: ResetPasswordData) => {
      setLoading(true);
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          cpf: Yup.string().required('CPF é obrigatório'),
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

        try {
          await api.put(`password_reset/${data.cpf}/${params.code}`, {
            password: data.password,
          });

          setAlertPassword(true);
          history.push('/');
        } catch {
          addToast({
            type: 'error',
            title: 'Error.',
            description: 'Por favor confirme o CPF.',
          });
        }
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
      } finally {
        setLoading(false);
      }
    },
    [addToast, history, params.code, setAlertPassword, setLoading],
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
              <InputMask
                type="text"
                width="240px"
                name="cpf"
                icon={HiOutlineUser}
                label="Confirme o CPF"
                mask="999.999.999-99"
              />
              <Input
                type="password"
                width="240px"
                name="password"
                icon={VscLock}
                label="Nova Senha"
              />
              <Input
                type="password"
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
