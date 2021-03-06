import React, { useCallback, useRef, useState } from 'react';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button';
import InputMask from '../../components/InputMask';

import { HiOutlineUser, RiArrowLeftSLine } from '../../styles/icon';

import getValidationErrors from '../../utils/getValidationErrors';

import Carrousel from '../../components/Carrousel';
import { useAuth } from '../../hooks/auth';
import LoadingDots from '../../components/LoadingDots';
import { useToast } from '../../hooks/toast';
import api from '../../services/api';

import {
  Container,
  Content,
  AnimationContainer,
  GroupButton,
  RadioButton,
} from './styles';

interface ForgotPasswordData {
  cpf: string;
}

const ForgotPassword: React.FC = () => {
  const history = useHistory();
  const formRef = useRef<FormHandles>(null);
  const [documentType, setDocumentType] = useState<boolean>(true);

  const { loading, setLoading } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: ForgotPasswordData) => {
      setLoading(true);
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          cpf: Yup.string().required(
            `Por favor, digite o ${documentType ? 'CPF' : 'CNPJ'}`,
          ),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        try {
          await api.post('password_reset', {
            document: data.cpf,
          });

          addToast({
            type: 'success',
            title: 'E-mail enviado.',
            description: 'E-mail enviado com sucesso !.',
          });

          history.push('/');
        } catch {
          addToast({
            type: 'error',
            title: 'CPF inexistente.',
            description: 'Por favor, configura o CPF digitado.',
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
          title: 'Error',
          description: 'Ocorreu um erro tente novamente mais tarde.',
        });
        setLoading(false);
      } finally {
        setLoading(false);
      }
    },
    [addToast, history, setLoading, documentType],
  );

  return (
    <Container>
      <Carrousel />

      <Content>
        <AnimationContainer>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <header>
              <RiArrowLeftSLine
                onClick={() => history.goBack()}
                size={32}
                color="var(--text)"
              />
              <h1>Redefinir Senha</h1>
            </header>

            <main>
              <p>
                Digite o {documentType ? 'CPF' : 'CNPJ'} do titular para
                redefinir sua senha, você receberá um e-mail com instruções
                sobre como redefinir sua senha.
              </p>

              <GroupButton>
                <RadioButton
                  onClick={() => setDocumentType(true)}
                  type="button"
                >
                  <div className={documentType ? 'active' : ''} />
                  <p>CPF</p>
                </RadioButton>

                <RadioButton
                  onClick={() => setDocumentType(false)}
                  type="button"
                >
                  <div className={!documentType ? 'active' : ''} />
                  <p>CNPJ</p>
                </RadioButton>
              </GroupButton>

              <InputMask
                width="240px"
                name="cpf"
                icon={HiOutlineUser}
                placeholder={documentType ? 'CPF' : 'CNPJ'}
                mask={documentType ? '999.999.999-99' : '99.999.999/9999-99'}
              />
            </main>

            <Button type="submit">
              {loading ? <LoadingDots /> : 'Continuar'}
            </Button>
          </Form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default ForgotPassword;
