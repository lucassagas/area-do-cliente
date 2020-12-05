import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Form } from '@unform/web';
import { useHistory } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Carrousel from '../../components/Carrousel';

import { RiCloseLine, RiArrowLeftSLine, FaCheck } from '../../styles/icon';

import {
  Container,
  Content,
  ProgressBar,
  ContentProgressBar,
  RadioButton,
  GroupButton,
  ContainerCard,
  Card,
} from './styles';
import getValidationErrors from '../../utils/getValidationErrors';
import { useToast } from '../../hooks/toast';

interface InputsProps {
  name?: string;
  cpf?: string;
  rg?: string;
  dateofbirth?: string;
  email?: string;
  phone?: string;
  optionalphone?: string;
  cellphone?: string;
  optionalcellphone?: string;
  reference?: string;
  address?: string;
  number?: number;
  neigh?: string;
  nameofcondominium?: string;
  complement?: string;
  cep?: number;
}

const SignUp: React.FC = () => {
  const [step, setStep] = useState(1);
  const [nameStep, setNameStep] = useState('Dados Pessoais');
  const [housingType, setHousingType] = useState(true);
  const [formData, setFormData] = useState<InputsProps>();
  const [active, setActive] = useState('');

  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();

  const history = useHistory();

  useEffect(() => {
    if (step === 1) {
      setNameStep('Dados Pessoais');
    }
    if (step === 2) {
      setNameStep('Contato');
    }
    if (step === 3) {
      setNameStep('Endereço');
    }
    if (step === 4) {
      setNameStep('Plano');
    }
  }, [step]);

  const handleSubmit = useCallback(
    async (data: object) => {
      console.log(formData);
      if (step === 1) {
        try {
          formRef.current?.setErrors({});

          const schema = Yup.object().shape({
            name: Yup.string().required('Nome obrigatório'),
            cpf: Yup.string().required('CPF obrigatório'),
            rg: Yup.string().required('RG obrigatório'),
            dateofbirth: Yup.string().required(
              'Data de Nascimento obrigatório',
            ),
          });

          await schema.validate(data, {
            abortEarly: false,
          });
          setStep(step + 1);
          setFormData(data);
        } catch (err) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }
      }

      if (step === 2) {
        try {
          formRef.current?.setErrors({});

          const schema = Yup.object().shape({
            email: Yup.string().required('Email obrigatório'),
            cellphone: Yup.string().required('Celular obrigatório'),
          });

          await schema.validate(data, {
            abortEarly: false,
          });
          setStep(step + 1);
          setFormData({ ...formData, ...data });
        } catch (err) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }
      }

      if (step === 3) {
        try {
          formRef.current?.setErrors({});

          const schema = Yup.object().shape({
            address: Yup.string().required('Endereço obrigatório'),
            neigh: Yup.string().required('Bairro obrigatório'),
          });

          await schema.validate(data, {
            abortEarly: false,
          });
          setStep(step + 1);
          setFormData({ ...formData, ...data });
        } catch (err) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }
      }
      if (step === 4) {
        if (!active) {
          addToast({
            type: 'error',
            title: 'Error',
            description: 'Selecione um plano',
          });
        }
        setFormData({ ...formData, ...data });
      }
    },
    [step, formData, active, addToast],
  );

  const close = useCallback(() => {
    history.push('/');
  }, [history]);

  const prevStep = useCallback(() => {
    step < 2 ? history.goBack() : setStep(step - 1);
  }, [history, step]);

  return (
    <Container>
      <Carrousel />
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <header>
            <div>
              <RiArrowLeftSLine onClick={prevStep} size={24} />
              <RiCloseLine onClick={close} size={24} />
            </div>
            <section>
              <h1>Pré-Cadastro</h1>
              <strong>
                {nameStep}: Etapa {step}
              </strong>
            </section>
          </header>
          {step === 1 && (
            <>
              <motion.main
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.6 } }}
                className="step1"
              >
                <Input
                  value={formData?.name}
                  name="name"
                  label="Nome Completo"
                />
                <div className="inputGroup">
                  <div>
                    <Input
                      value={formData?.cpf}
                      width="140px"
                      name="cpf"
                      label="CPF"
                    />
                  </div>
                  <div>
                    <Input
                      value={formData?.rg}
                      width="100px"
                      name="rg"
                      label="RG"
                    />
                  </div>
                </div>
                <Input
                  width="180px"
                  name="dateofbirth"
                  label="Data de Nascimento"
                  type="date"
                  value={formData?.dateofbirth}
                />
              </motion.main>
            </>
          )}
          {step === 2 && (
            <>
              <motion.main
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.6 } }}
                className="step2"
              >
                <Input
                  width="250px"
                  value={formData?.email}
                  name="email"
                  label="E-mail"
                />
                <Input
                  value={formData?.cellphone}
                  width="140px"
                  name="cellphone"
                  label="Celular"
                />
                <Input
                  width="140px"
                  name="optionalcellphone"
                  label="Celular Opcional"
                  value={formData?.optionalcellphone}
                />
                <Input
                  value={formData?.phone}
                  width="140px"
                  name="phone"
                  label="Telefone Fixo"
                />
                <Input
                  width="140px"
                  name="optionalphone"
                  label="Telefone Fixo Opcional"
                  value={formData?.optionalphone}
                />
              </motion.main>
            </>
          )}
          {step === 3 && (
            <>
              <motion.main
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.6 } }}
                className="step2"
              >
                <p>Tipo de Moradia</p>
                <GroupButton>
                  <RadioButton
                    onClick={() => setHousingType(true)}
                    type="button"
                  >
                    <div className={housingType ? 'active' : ''} />
                    <p>Casa</p>
                  </RadioButton>

                  <RadioButton
                    onClick={() => setHousingType(false)}
                    type="button"
                  >
                    <div className={!housingType ? 'active' : ''} />
                    <p>Apartamento</p>
                  </RadioButton>
                </GroupButton>

                {housingType ? (
                  <>
                    <Input
                      value={formData?.reference}
                      name="reference"
                      label="Referência"
                    />

                    <section />

                    <div>
                      <Input
                        width="100px"
                        name="cep"
                        type="number"
                        label="CEP"
                        value={formData?.cep}
                      />
                    </div>
                    <Input
                      name="address"
                      label="Endereço"
                      value={formData?.address}
                    />

                    <div>
                      <Input
                        width="100px"
                        name="number"
                        type="number"
                        label="Número"
                        value={formData?.number}
                      />
                      <Input
                        value={formData?.neigh}
                        width="250px"
                        name="neigh"
                        label="Bairro"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <Input
                      name="nameofcondominium"
                      label="Nome do Condomínio"
                      value={formData?.nameofcondominium}
                    />

                    <section />

                    <div>
                      <Input
                        width="100px"
                        name="cep"
                        label="CEP"
                        value={formData?.cep}
                      />
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        gap: '20px',
                        margin: '-10px 0',
                      }}
                    >
                      <div>
                        <Input
                          value={formData?.address}
                          name="address"
                          label="Endereço"
                        />
                      </div>
                      <div>
                        <Input
                          value={formData?.number}
                          width="80px"
                          name="number"
                          label="Número"
                        />
                      </div>
                    </div>
                    <div>
                      <Input
                        name="neigh"
                        label="Bairro"
                        value={formData?.neigh}
                      />

                      <Input
                        width="100px"
                        name="complement"
                        label="Complemento"
                        value={formData?.complement}
                      />
                    </div>
                  </>
                )}
              </motion.main>
            </>
          )}
          {step === 4 && (
            <>
              <motion.main
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.6 } }}
                className="step2"
              >
                <ContainerCard>
                  <div>
                    <section>
                      <Card
                        type="button"
                        onClick={() => setActive('60Mb')}
                        className={active === '60Mb' ? 'active' : ''}
                      >
                        <div>
                          <span className={active === '60Mb' ? 'active' : ''}>
                            <FaCheck size={16} />
                          </span>
                        </div>
                        <div>
                          <h1>60Mb</h1>
                          <strong>20Upload</strong>
                          <h2>R$80,00</h2>
                        </div>
                      </Card>

                      <Card
                        type="button"
                        className={active === '1Gb' ? 'active' : ''}
                        onClick={() => setActive('1Gb')}
                      >
                        <div>
                          <span className={active === '1Gb' ? 'active' : ''}>
                            <FaCheck size={16} />
                          </span>
                        </div>
                        <div>
                          <h1>1Gb</h1>
                          <strong>100Upload</strong>
                          <h2>R$150,00</h2>
                        </div>
                      </Card>
                    </section>

                    <section>
                      <Card
                        type="button"
                        className={active === '150Mb' ? 'active' : ''}
                        onClick={() => setActive('150Mb')}
                      >
                        <div>
                          <span className={active === '150Mb' ? 'active' : ''}>
                            <FaCheck size={16} />
                          </span>
                        </div>
                        <div>
                          <h1>150Mb</h1>
                          <strong>50Upload</strong>
                          <h2>R$100,00</h2>
                        </div>
                      </Card>

                      <Card
                        type="button"
                        className={active === '1Gb2' ? 'active' : ''}
                        onClick={() => setActive('1Gb2')}
                      >
                        <div>
                          <span className={active === '1Gb2' ? 'active' : ''}>
                            <FaCheck size={16} />
                          </span>
                        </div>
                        <div>
                          <h1>1Gb</h1>
                          <strong>300Upload</strong>
                          <h2>R$200,00</h2>
                        </div>
                      </Card>
                    </section>
                  </div>
                </ContainerCard>
              </motion.main>
            </>
          )}
          <footer>
            <Button type="submit">{step === 4 ? 'Concluir' : 'Avançar'}</Button>

            <ProgressBar>
              <ContentProgressBar />
              {step >= 2 && (
                <ContentProgressBar
                  initial={{ x: -100 }}
                  animate={{ x: 0, transition: { duration: 1 } }}
                />
              )}
              {step >= 3 && (
                <ContentProgressBar
                  initial={{ x: -100 }}
                  animate={{ x: 0, transition: { duration: 1 } }}
                />
              )}
              {step >= 4 && (
                <ContentProgressBar
                  initial={{ x: -100 }}
                  animate={{ x: 0, transition: { duration: 1 } }}
                />
              )}
            </ProgressBar>

            <p>{step} de 4 etapas</p>
          </footer>
        </Form>
      </Content>
    </Container>
  );
};

export default SignUp;
