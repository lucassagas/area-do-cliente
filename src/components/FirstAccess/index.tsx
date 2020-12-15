import React, { useCallback, useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import Button from '../Button';
import Input from '../Input';
import { VscLock } from '../../styles/icon';

import { Container } from './styles';
import getValidationErrors from '../../utils/getValidationErrors';
import { useToast } from '../../hooks/toast';
import LoadingDots from '../LoadingDots';

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
  const { addToast } = useToast();

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

        console.log('error');
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
    [addToast],
  );

  return (
    <Container>
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
