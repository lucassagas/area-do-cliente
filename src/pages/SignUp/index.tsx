import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Form } from '@unform/web';
import { useHistory } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import Input from '../../components/Input';
import InputMask from '../../components/InputMask';
import Button from '../../components/Button';
import Carrousel from '../../components/Carrousel';

import { RiCloseLine, RiArrowLeftSLine, FaCheck } from '../../styles/icon';
import blackLogoImg from '../../assets/logo_preta.svg';
import whiteLogoImg from '../../assets/logo_branca.svg';

import {
  Container,
  Content,
  ProgressBar,
  ContentProgressBar,
  RadioButton,
  GroupButton,
  ContainerCard,
  Card,
  Separator,
  ContainerFinish,
} from './styles';

import getValidationErrors from '../../utils/getValidationErrors';
import { useToast } from '../../hooks/toast';
import Textarea from '../../components/Textarea';
import { useTheme } from '../../hooks/themes';

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
  city?: string;
}

const SignUp: React.FC = () => {
  const [step, setStep] = useState(1);
  const [nameStep, setNameStep] = useState('Dados Pessoais');
  const [housingType, setHousingType] = useState<boolean | null>(true);
  const [formData, setFormData] = useState<InputsProps>();
  const [active, setActive] = useState<string | object>();
  const [dueDate, setDueDate] = useState(1);
  const [period, setPeriod] = useState('manha');
  const [cep, setCep] = useState<any>();

  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const { themeName } = useTheme();

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
    if (step === 5) {
      setNameStep('Vencimento e Instalação');
    }
  }, [step]);

  const handleSubmit = useCallback(
    async (data: object) => {
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

          return;
        }
        setStep(step + 1);
      }

      if (step === 5) {
        const parsedData = {
          ...data,
          period,
          dueDate,
          plan: active,
          type: housingType ? 'Casa' : 'Apartamento',
        };
        setStep(step + 1);
        setFormData({ ...formData, ...parsedData });
      }
    },
    [step, formData, active, addToast, period, dueDate, housingType],
  );

  const close = useCallback(() => {
    history.push('/');
  }, [history]);

  const prevStep = useCallback(() => {
    step < 2 ? history.goBack() : setStep(step - 1);
  }, [history, step]);

  const handleDueDate = useCallback((day: number) => {
    setDueDate(day);
  }, []);

  const handleChangePeriod = useCallback((data: string) => {
    setPeriod(data);
  }, []);

  const searchCEP = useCallback(() => {
    const parsedCep = cep.toString().replace('_', '');

    if (parsedCep?.length !== 9) {
      addToast({
        type: 'info',
        title: 'Erro no CEP',
        description: 'CEP deve conter 8 digitos',
      });

      return;
    }

    fetch(`https://viacep.com.br/ws/${parsedCep}/json/`)
      .then((response: any) => response.json())
      .then((data: any) => {
        if (data.erro) {
          addToast({
            type: 'error',
            title: 'CEP NÃO ENCONTRADO',
            description: 'CEP informado não encontrado.',
          });

          return;
        }

        const parsedData = {
          city: data.localidade,
          neigh: data.bairro,
          address: data.logradouro,
          cep,
        };

        setFormData({ ...formData, ...parsedData });
      });
  }, [addToast, cep, formData]);
  return (
    <Container>
      <Carrousel />

      {step <= 5 && (
        <Content>
          <Form
            initialData={{
              address: formData?.address,
              reference: formData?.reference,
              cpf: formData?.cpf,
              rg: formData?.rg,
              cep: formData?.cep,
              email: formData?.email,
              name: formData?.name,
              phone: formData?.phone,
              cellphone: formData?.cellphone,
              complement: formData?.complement,
              nameofcondominium: formData?.nameofcondominium,
              optionalcellphone: formData?.optionalcellphone,
              optionalphone: formData?.optionalphone,
              city: formData?.city,
              number: formData?.number,
              neigh: formData?.neigh,
              dateofbirth: formData?.dateofbirth,
            }}
            ref={formRef}
            onSubmit={handleSubmit}
          >
            <header>
              <div>
                <RiArrowLeftSLine onClick={prevStep} size={24} />
                <button
                  style={{
                    zIndex: 999,
                    padding: '10px 0px',
                    background: 'none',
                    border: 0,
                  }}
                  onClick={close}
                  type="button"
                >
                  <RiCloseLine size={24} />
                </button>
              </div>
              <section>
                <h1>Pré-Cadastro</h1>
                <strong>
                  {nameStep}: Etapa {step}
                </strong>
                {active && <p>Plano selecionado: {active}</p>}
              </section>
            </header>
            {step === 1 && (
              <>
                <motion.main
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.6 } }}
                  className="step1"
                >
                  <Input name="name" label="Nome Completo" />
                  <div className="inputGroup">
                    <div>
                      <InputMask
                        width="140px"
                        name="cpf"
                        label="CPF"
                        mask="999.999.999-99"
                      />
                    </div>
                    <div>
                      <Input width="150px" name="rg" label="RG" type="number" />
                    </div>
                  </div>
                  <Input
                    width="180px"
                    name="dateofbirth"
                    label="Data de Nascimento"
                    type="date"
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
                    name="email"
                    label="E-mail"
                    type="email"
                  />
                  <InputMask
                    width="160px"
                    name="cellphone"
                    label="Celular"
                    mask="(99)99999-9999"
                  />
                  <InputMask
                    width="160px"
                    name="optionalcellphone"
                    label="Celular Opcional"
                    mask="(99)99999-9999"
                  />
                  <InputMask
                    width="160px"
                    name="phone"
                    label="Telefone Fixo"
                    mask="(99)9999-9999"
                  />
                  <InputMask
                    width="160px"
                    name="optionalphone"
                    label="Telefone Fixo Opcional"
                    mask="(99)9999-9999"
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
                      <Input name="reference" label="Referência" />

                      <section />

                      <div className="cepContainer">
                        <div>
                          <InputMask
                            width="140px"
                            name="cep"
                            mask="99999-999"
                            label="CEP"
                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                              setCep(e.target.value);
                            }}
                          />
                        </div>
                        <Button
                          onClick={searchCEP}
                          style={{ width: 100 }}
                          type="button"
                        >
                          Buscar
                        </Button>
                      </div>
                      <Input name="city" label="Cidade" />
                      <Input name="address" label="Endereço" />

                      <div>
                        <Input
                          width="100px"
                          name="number"
                          type="number"
                          label="Número"
                        />
                        <Input width="250px" name="neigh" label="Bairro" />
                      </div>
                    </>
                  ) : (
                    <>
                      <Input
                        name="nameofcondominium"
                        label="Nome do Condomínio"
                      />

                      <section />

                      <div className="cepContainer">
                        <div>
                          <InputMask
                            width="140px"
                            name="cep"
                            mask="99999-999"
                            label="CEP"
                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                              setCep(e.target.value);
                            }}
                          />
                        </div>
                        <Button
                          onClick={searchCEP}
                          style={{ width: 100 }}
                          type="button"
                        >
                          Buscar
                        </Button>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          gap: '20px',
                          margin: '-10px 0',
                        }}
                      >
                        <div>
                          <Input name="address" label="Endereço" />
                        </div>
                        <div>
                          <Input width="80px" name="number" label="Número" />
                        </div>
                      </div>
                      <div>
                        <Input name="neigh" label="Bairro" />

                        <Input
                          width="140px"
                          name="complement"
                          label="Complemento"
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
                          onClick={() => setActive('60Mb 20Up, R$80,00')}
                          className={
                            active === '60Mb 20Up, R$80,00' ? 'active' : ''
                          }
                        >
                          <div>
                            <span
                              className={
                                active === '60Mb 20Up, R$80,00' ? 'active' : ''
                              }
                            >
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
                          className={
                            active === '1Gb 100Up, R$150,00' ? 'active' : ''
                          }
                          onClick={() => setActive('1Gb 100Up, R$150,00')}
                        >
                          <div>
                            <span
                              className={
                                active === '1Gb 100Up, R$150,00' ? 'active' : ''
                              }
                            >
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
                          className={
                            active === '150Mb 50Up, R$100,00' ? 'active' : ''
                          }
                          onClick={() => setActive('150Mb 50Up, R$100,00')}
                        >
                          <div>
                            <span
                              className={
                                active === '150Mb 50Up, R$100,00'
                                  ? 'active'
                                  : ''
                              }
                            >
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
                          className={
                            active === '1Gb 300Up, R$200,00' ? 'active' : ''
                          }
                          onClick={() => setActive('1Gb 300Up, R$200,00')}
                        >
                          <div>
                            <span
                              className={
                                active === '1Gb 300Up, R$200,00' ? 'active' : ''
                              }
                            >
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
            {step === 5 && (
              <>
                <motion.main
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.6 } }}
                  className="step2"
                >
                  <p>Data de Vencimento</p>
                  <GroupButton>
                    <RadioButton onClick={() => handleDueDate(1)} type="button">
                      <div className={dueDate === 1 ? 'active' : ''} />
                      <p>01</p>
                    </RadioButton>

                    <RadioButton onClick={() => handleDueDate(2)} type="button">
                      <div className={dueDate === 2 ? 'active' : ''} />
                      <p>02</p>
                    </RadioButton>

                    <RadioButton onClick={() => handleDueDate(3)} type="button">
                      <div className={dueDate === 3 ? 'active' : ''} />
                      <p>03</p>
                    </RadioButton>

                    <RadioButton onClick={() => handleDueDate(5)} type="button">
                      <div className={dueDate === 5 ? 'active' : ''} />
                      <p>05</p>
                    </RadioButton>

                    <RadioButton onClick={() => handleDueDate(7)} type="button">
                      <div className={dueDate === 7 ? 'active' : ''} />
                      <p>07</p>
                    </RadioButton>

                    <RadioButton
                      onClick={() => handleDueDate(10)}
                      type="button"
                    >
                      <div className={dueDate === 10 ? 'active' : ''} />
                      <p>10</p>
                    </RadioButton>
                  </GroupButton>

                  <Separator />

                  <GroupButton>
                    <RadioButton
                      onClick={() => handleChangePeriod('manha')}
                      type="button"
                    >
                      <div className={period === 'manha' ? 'active' : ''} />
                      <p>Manhã</p>
                    </RadioButton>

                    <RadioButton
                      onClick={() => handleChangePeriod('tarde')}
                      type="button"
                    >
                      <div className={period === 'tarde' ? 'active' : ''} />
                      <p>Tarde</p>
                    </RadioButton>

                    <RadioButton
                      onClick={() => handleChangePeriod('integral')}
                      type="button"
                    >
                      <div className={period === 'integral' ? 'active' : ''} />
                      <p>Integral</p>
                    </RadioButton>

                    <RadioButton
                      onClick={() => handleChangePeriod('sabado')}
                      type="button"
                    >
                      <div className={period === 'sabado' ? 'active' : ''} />
                      <p>Sábado</p>
                    </RadioButton>
                  </GroupButton>

                  <Separator />

                  <Input
                    type="text"
                    label="Onde você nos conheceu ?"
                    name="youknowus"
                    list="knowus"
                  />

                  <datalist id="knowus">
                    <option value="Instagram">Instagram</option>
                    <option value="Facebook">Facebook</option>
                    <option value="Twitter">Twitter</option>
                    <option value="Parceiros Comerciais">
                      Parceiros Comerciais
                    </option>
                  </datalist>

                  <Separator />

                  <Textarea label="Observações" name="obs" rows={5} />
                </motion.main>
              </>
            )}
            <footer>
              <Button type="submit">
                {step === 5 ? 'Concluir' : 'Avançar'}
              </Button>

              <ProgressBar>
                <ContentProgressBar />
                {step >= 2 && (
                  <ContentProgressBar
                    initial={{ x: -70 }}
                    animate={{ x: 0, transition: { duration: 1 } }}
                  />
                )}
                {step >= 3 && (
                  <ContentProgressBar
                    initial={{ x: -70 }}
                    animate={{ x: 0, transition: { duration: 1 } }}
                  />
                )}
                {step >= 4 && (
                  <ContentProgressBar
                    initial={{ x: -70 }}
                    animate={{ x: 0, transition: { duration: 1 } }}
                  />
                )}

                {step >= 5 && (
                  <ContentProgressBar
                    initial={{ x: -70 }}
                    animate={{ x: 0, transition: { duration: 1 } }}
                  />
                )}
              </ProgressBar>

              <p>{step} de 5 etapas</p>
            </footer>
          </Form>
        </Content>
      )}
      {step >= 6 && (
        <ContainerFinish
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.6 } }}
        >
          <header>
            <img
              src={themeName === 'dark' ? whiteLogoImg : blackLogoImg}
              alt="logo"
            />
            <RiCloseLine size={24} onClick={close} />
          </header>

          <main>
            <h3>Parabéns</h3>
            <h1>
              Você <br />
              Concluiu <br />
              Seu Cadastro
            </h1>
            <p>
              Agora você está mais <br />
              próximo de se tornar um <br />
              cliente <span>Neorede.</span>
            </p>
          </main>

          <footer>
            <p>
              Logo um de nossos atendentes <br />
              entrarão em contato.
            </p>
          </footer>
        </ContainerFinish>
      )}
    </Container>
  );
};

export default SignUp;
