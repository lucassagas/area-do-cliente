import React, { useCallback, useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import Button from '../Button';
import Input from '../Input';
import { VscLock } from '../../styles/icon';

import { Container } from './styles';
import getValidationErrors from '../../utils/getValidationErrors';
import { useToast } from '../../hooks/toast';
import LoadingDots from '../LoadingDots';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

interface PasswordProps {
  password: string;
  confirmpassword: string;
}

interface FirstAccessProps {
  title: string;
}

const FirstAccess: React.FC<FirstAccessProps> = ({ title }) => {
  const formRef = useRef<FormHandles>(null);
  const [loading, setLoading] = useState(false);
  const [display, setDisplay] = useState(true);
  const { addToast } = useToast();
  const { user } = useAuth();

  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: PasswordProps) => {
      try {
        setLoading(true);
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          password: Yup.string().required('Senha obrigatória'),
          confirmpassword: Yup.string().oneOf(
            [Yup.ref('password')],
            'Confirmação incorreta',
          ),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.put(
          `customers/${user.code}/info/personal/${user.document}/change_password`,
          {
            password: data.password,
          },
        );

        addToast({
          type: 'success',
          title: 'Sucesso!',
          description: 'Senha alterada com sucesso!',
        });

        const userData = {
          code: user.code,
          document: user.document,
          first_access: false,
          id: user.id,
          name: user.name,
          name_abbreviate: user.name_abbreviate,
        };

        localStorage.setItem('@NeoCliente:user', JSON.stringify(userData));
        setDisplay(false);
        history.go(0);
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na alteração de senha',
          description: 'Tente novamente mais tarde',
        });
      } finally {
        setLoading(false);
      }
    },
    [addToast, user, history],
  );

  return (
    <Container display={display}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <header>
          <h1>{title}</h1>
          <p>Para dar continuidade altere sua senha</p>
        </header>

        <main>
          <Input
            type="password"
            width="200px"
            label="Nova Senha"
            name="password"
            icon={VscLock}
          />
          <Input
            type="password"
            width="200px"
            label="Confirme sua Nova Senha"
            name="confirmpassword"
            icon={VscLock}
          />
        </main>

        <Button type="submit">{loading ? <LoadingDots /> : 'Avançar'}</Button>
      </Form>
    </Container>
  );
};

export default FirstAccess;
