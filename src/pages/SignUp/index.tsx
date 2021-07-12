import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
  MouseEvent,
} from 'react';
import { Form } from '@unform/web';
import { useHistory } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { AnimatePresence, motion } from 'framer-motion';
import Lottie from 'react-lottie';
import Input from '../../components/Input';
import InputMask from '../../components/InputMask';
import Button from '../../components/Button';
import Carrousel from '../../components/Carrousel';

import {
  RiArrowLeftSLine,
  FaCheck,
  IoMdClose,
  AiOutlineQuestionCircle,
  HiWifi,
  FaRegCalendar,
  HiOutlineClock,
  FiMonitor,
  IoMdAdd,
  MdTimeline,
  HiOutlineLocationMarker,
} from '../../styles/icon';
import blackLogoImg from '../../assets/logo_preta.svg';
import whiteLogoImg from '../../assets/logo_branca.svg';
import animationData from '../../animations/congratulations.json';

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
  KnowMore,
  ContainerToolTip,
  Info,
  WrapperTypeOfContract,
  WrapperOptionsOfCorporatePlans,
  OtherPlansButton,
  ModalDescribeYourNeedOverlay,
  DescribeYourNeedBox,
} from './styles';

import LoadingDots from '../../components/LoadingDots';
import getValidationErrors from '../../utils/getValidationErrors';
import { useToast } from '../../hooks/toast';
import Textarea from '../../components/Textarea';
import { useTheme } from '../../hooks/themes';
import api from '../../services/api';
import { usePlans } from '../../hooks/plans';

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
  const [typeOfContract, setTypeOfContract] = useState<string>('cpf');
  const [typeOfPlan, setTypeOfPlan] = useState<string>('');
  const [showModalDescribeYourNeed, setShowModalDescribeYourNeed] = useState<
    boolean
  >(false);
  const [showNextButton, setShowNextButton] = useState<boolean>(true);
  const [formData, setFormData] = useState<InputsProps>();
  const [dueDate, setDueDate] = useState(1);
  const [period, setPeriod] = useState('segunda a sexta');
  const [cep, setCep] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  const formRef = useRef<FormHandles>(null);
  const { setDisplayModalPlans, selectedPlan, setSelectedPlan } = usePlans();
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
            name: Yup.string().required('Por favor, digite o seu nome'),
            cpf: Yup.string().required('Por favor, digite o seu CPF'),
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
            email: Yup.string().required('Por favor, digite o seu email'),
            cellphone: Yup.string().required(
              'Por favor, digite o seu número de celular',
            ),
          });

          await schema.validate(data, {
            abortEarly: false,
          });
          setStep(step + 1);
          const formattedData = {
            ...data,
            people: typeOfContract,
          };
          setFormData({ ...formData, ...formattedData });
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
            city: Yup.string().required(
              'Por favor, digite o nome da sua cidade',
            ),
            address: Yup.string().required(
              'Por favor, digite o nome da sua rua.',
            ),
            neigh: Yup.string().required(
              'Por favor, digite o nome do seu bairro',
            ),
            number: Yup.number()
              .typeError('Por favor, digite o número da sua residencia')
              .required('Por favor, digite o número da sua residencia'),
            cep: Yup.string().required('Por favor, digite informe o seu CEP'),
          });

          await schema.validate(data, {
            abortEarly: false,
          });
          setStep(step + 1);
          setFormData({ ...formData, ...data });

          if (typeOfContract === 'cnpj') {
            setShowNextButton(false);
          }
        } catch (err) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }
      }

      if (step === 4) {
        if (!selectedPlan) {
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
          plan: selectedPlan,
          type: housingType ? 'Casa' : 'Apartamento',
        };
        const finalData = { ...formData, ...parsedData };

        try {
          setLoading(true);
          await api.post('customers/pre_registration', finalData);
          setStep(step + 1);
        } catch {
          addToast({
            type: 'error',
            title: 'Error',
            description: 'Error, tente novamente mais tarde',
          });
        } finally {
          setLoading(false);
        }
      }
    },
    [
      step,
      typeOfContract,
      formData,
      selectedPlan,
      addToast,
      period,
      dueDate,
      housingType,
    ],
  );

  const close = useCallback(() => {
    history.push('/');
  }, [history]);

  const prevStep = useCallback(() => {
    if (step === 5 && typeOfContract === 'cnpj') {
      setShowNextButton(false);
    }

    if (step === 4 && typeOfContract === 'cnpj') {
      setShowNextButton(true);
      setTypeOfPlan('');
    }

    if (step === 5 && typeOfContract === 'cnpj') {
      setShowNextButton(true);
    }

    step < 2 ? history.goBack() : setStep(step - 1);
  }, [history, step, typeOfContract]);

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

  const handleDescribeYourNeed = useCallback(
    data => {
      setSelectedPlan(data.plan);
      setStep(step + 1);
      setShowModalDescribeYourNeed(false);
    },
    [setSelectedPlan, step],
  );

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

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
                <button onClick={close} type="button">
                  <IoMdClose size={22} />
                </button>
              </div>
              <section>
                <h1>Pré-Cadastro</h1>
                <strong>
                  {nameStep}: Etapa {step}
                </strong>
                {/* {selectedPlan && (
                  <p style={{ margin: '5px 0' }}>
                    Plano selecionado: {selectedPlan}
                  </p>
                )} */}
              </section>
              {step === 4 && typeOfContract === 'cpf' && (
                <KnowMore>
                  <p>
                    <button
                      type="button"
                      onClick={() => setDisplayModalPlans(true)}
                    >
                      clique aqui
                    </button>
                    e saiba mais sobre os planos.
                  </p>
                </KnowMore>
              )}
            </header>
            {step === 1 && (
              <>
                <motion.main
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.6 } }}
                  className="step1"
                >
                  <WrapperTypeOfContract>
                    <RadioButton
                      onClick={() => setTypeOfContract('cpf')}
                      type="button"
                    >
                      <div
                        className={typeOfContract === 'cpf' ? 'active' : ''}
                      />
                      <p>CPF</p>
                    </RadioButton>
                    <RadioButton
                      onClick={() => setTypeOfContract('cnpj')}
                      type="button"
                    >
                      <div
                        className={typeOfContract === 'cnpj' ? 'active' : ''}
                      />
                      <p>CNPJ</p>
                    </RadioButton>
                  </WrapperTypeOfContract>

                  {typeOfContract === 'cpf' ? (
                    <>
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
                          <Input
                            width="150px"
                            name="rg"
                            label="RG"
                            type="number"
                          />
                        </div>
                      </div>
                      <InputMask
                        width="120px"
                        name="dateofbirth"
                        label="Data de Nascimento"
                        type="text"
                        mask="99/99/9999"
                      />
                    </>
                  ) : (
                    <>
                      <Input name="name" label="Razão Social" />
                      <InputMask
                        width="190px"
                        name="cpf"
                        label="CNPJ"
                        mask="99.999.999/9999-99"
                      />
                    </>
                  )}
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
                  <Input name="email" label="E-mail" type="email" />
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
                  {typeOfContract === 'cpf' && (
                    <>
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
                          <p>Condominio</p>
                        </RadioButton>
                      </GroupButton>
                    </>
                  )}

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
                      <Input name="city" label="Cidade" />
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
                          info="Neste campo deve conter informações como número do apartamento e bloco. Em caso de condominio horizontal, informar o número da residência"
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
                  {typeOfContract === 'cpf' ? (
                    <ContainerCard>
                      <Card
                        type="button"
                        onClick={() => setSelectedPlan('1611')}
                        className={selectedPlan === '1611' ? 'active' : ''}
                      >
                        <div>
                          <span
                            className={selectedPlan === '1611' ? 'active' : ''}
                          >
                            <FaCheck size={16} />
                          </span>
                        </div>
                        <div>
                          <h1>120Mb</h1>
                          <strong>40Upload</strong>
                          <h2>R$80,00</h2>
                        </div>
                      </Card>

                      <Card
                        type="button"
                        className={selectedPlan === '1613' ? 'active' : ''}
                        onClick={() => setSelectedPlan('1613')}
                      >
                        <div>
                          <span
                            className={selectedPlan === '1613' ? 'active' : ''}
                          >
                            <FaCheck size={16} />
                          </span>
                        </div>
                        <div>
                          <h1>400Mb</h1>
                          <strong>120Upload</strong>
                          <h2>R$100,00</h2>
                        </div>
                      </Card>
                      <Card
                        type="button"
                        className={selectedPlan === '1614' ? 'active' : ''}
                        onClick={() => setSelectedPlan('1614')}
                      >
                        <div>
                          <span
                            className={selectedPlan === '1614' ? 'active' : ''}
                          >
                            <FaCheck size={16} />
                          </span>
                        </div>
                        <div>
                          <h1>600Mb</h1>
                          <strong>180Upload</strong>
                          <h2>R$120,00</h2>
                        </div>
                      </Card>
                    </ContainerCard>
                  ) : (
                    <>
                      <WrapperOptionsOfCorporatePlans>
                        {!typeOfPlan && (
                          <>
                            <div>
                              <strong>Dedicado</strong>
                              <section>
                                <ul>
                                  <li>
                                    <HiWifi size={16} /> Planos simétricos
                                  </li>
                                  <li>
                                    <FaRegCalendar size={16} /> Atendimento 24/7
                                  </li>
                                  <li>
                                    <HiOutlineClock size={16} /> SLA 4 horas
                                  </li>
                                  <li>
                                    <FiMonitor size={16} /> Monitoramento de
                                    link
                                  </li>
                                  <li>
                                    <HiOutlineLocationMarker size={16} /> IP
                                    público fixo
                                  </li>
                                  <li>
                                    <IoMdAdd size={20} /> Entre outros
                                    benefícios
                                  </li>
                                </ul>

                                <Button
                                  onClick={() => {
                                    setTypeOfPlan('dedicated');
                                    setShowNextButton(true);
                                  }}
                                  type="button"
                                >
                                  Contratar
                                </Button>
                              </section>
                            </div>

                            <div>
                              <strong>Empresarial</strong>
                              <section>
                                <ul>
                                  <li>
                                    <HiWifi size={16} /> Planos assimétricos
                                  </li>
                                  <li>
                                    <FaRegCalendar size={16} /> Atendimento
                                    horário comercial
                                  </li>
                                  <li>
                                    <HiOutlineClock size={16} /> SLA 8 horas
                                    úteis
                                  </li>
                                  <li>
                                    <FiMonitor size={16} /> Atendimento
                                    exclusivo
                                  </li>
                                  <li>
                                    <HiOutlineLocationMarker size={16} /> IP
                                    público fixo
                                  </li>
                                  <li>
                                    <MdTimeline size={20} /> Garantia de banda
                                    70%
                                  </li>
                                </ul>
                                <Button
                                  onClick={() => {
                                    setShowNextButton(true);
                                    setTypeOfPlan('broadband');
                                  }}
                                  type="button"
                                >
                                  Contratar
                                </Button>
                              </section>
                            </div>
                          </>
                        )}
                      </WrapperOptionsOfCorporatePlans>
                      {typeOfPlan === 'dedicated' && (
                        <>
                          <ContainerCard>
                            <Card
                              type="button"
                              onClick={() => setSelectedPlan('50MB-50MB')}
                              className={
                                selectedPlan === '50MB-50MB' ? 'active' : ''
                              }
                            >
                              <div>
                                <span
                                  className={
                                    selectedPlan === '50MB-50MB' ? 'active' : ''
                                  }
                                >
                                  <FaCheck size={16} />
                                </span>
                              </div>
                              <div>
                                <h1>50Mb</h1>
                                <strong>50Upload</strong>
                                <h4>FULL</h4>
                              </div>
                            </Card>

                            <Card
                              type="button"
                              onClick={() => setSelectedPlan('100MB-100MB')}
                              className={
                                selectedPlan === '100MB-100MB' ? 'active' : ''
                              }
                            >
                              <div>
                                <span
                                  className={
                                    selectedPlan === '100MB-100MB'
                                      ? 'active'
                                      : ''
                                  }
                                >
                                  <FaCheck size={16} />
                                </span>
                              </div>
                              <div>
                                <h1>100Mb</h1>
                                <strong>100Upload</strong>
                                <h4>FULL</h4>
                              </div>
                            </Card>

                            <Card
                              type="button"
                              onClick={() => setSelectedPlan('500MB-500MB')}
                              className={
                                selectedPlan === '500MB-500MB' ? 'active' : ''
                              }
                            >
                              <div>
                                <span
                                  className={
                                    selectedPlan === '500MB-500MB'
                                      ? 'active'
                                      : ''
                                  }
                                >
                                  <FaCheck size={16} />
                                </span>
                              </div>
                              <div>
                                <h1>500Mb</h1>
                                <strong>500Upload</strong>
                                <h4>FULL</h4>
                              </div>
                            </Card>

                            <Card
                              type="button"
                              onClick={() => setSelectedPlan('1GB-1GB')}
                              className={
                                selectedPlan === '1GB-1GB' ? 'active' : ''
                              }
                            >
                              <div>
                                <span
                                  className={
                                    selectedPlan === '1GB-1GB' ? 'active' : ''
                                  }
                                >
                                  <FaCheck size={16} />
                                </span>
                              </div>
                              <div>
                                <h1>1Gb</h1>
                                <strong>1Gb Upload</strong>
                                <h4>FULL</h4>
                              </div>
                            </Card>
                          </ContainerCard>
                          <OtherPlansButton
                            onClick={() => setShowModalDescribeYourNeed(true)}
                            type="button"
                          >
                            Outros planos e serviços
                          </OtherPlansButton>
                        </>
                      )}

                      {typeOfPlan === 'broadband' && (
                        <ContainerCard>
                          <Card
                            type="button"
                            onClick={() => setSelectedPlan('300Mb-90Mb')}
                            className={
                              selectedPlan === '300Mb-90Mb' ? 'active' : ''
                            }
                          >
                            <div>
                              <span
                                className={
                                  selectedPlan === '300Mb-90Mb' ? 'active' : ''
                                }
                              >
                                <FaCheck size={16} />
                              </span>
                            </div>
                            <div>
                              <h1>300Mb</h1>
                              <strong>90Mb Upload</strong>
                              <h2>R$150,00</h2>
                            </div>
                          </Card>

                          <Card
                            type="button"
                            onClick={() => setSelectedPlan('300Mb-150Mb')}
                            className={
                              selectedPlan === '300Mb-150Mb' ? 'active' : ''
                            }
                          >
                            <div>
                              <span
                                className={
                                  selectedPlan === '300Mb-150Mb' ? 'active' : ''
                                }
                              >
                                <FaCheck size={16} />
                              </span>
                            </div>
                            <div>
                              <h1>300Mb</h1>
                              <strong>150Mb Upload</strong>
                              <h2>R$250,00</h2>
                            </div>
                          </Card>

                          <Card
                            type="button"
                            onClick={() => setSelectedPlan('500Mb-250Mb')}
                            className={
                              selectedPlan === '500Mb-250Mb' ? 'active' : ''
                            }
                          >
                            <div>
                              <span
                                className={
                                  selectedPlan === '500Mb-250Mb' ? 'active' : ''
                                }
                              >
                                <FaCheck size={16} />
                              </span>
                            </div>
                            <div>
                              <h1>500Mb</h1>
                              <strong>250Mb Upload</strong>
                              <h2>R$350,00</h2>
                            </div>
                          </Card>
                        </ContainerCard>
                      )}
                    </>
                  )}
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
                  <p style={{ marginTop: 12 }}>Data de vencimento</p>
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

                  <ContainerToolTip>
                    <p>Período de atendimento</p>
                    <Info title="Ao informar o Período de Atendimento, nossos atendentes saberão qual o melhor período para nossos atendentes entrarem em contato.">
                      <AiOutlineQuestionCircle size={20} color="var(--text)" />
                    </Info>
                  </ContainerToolTip>

                  <GroupButton style={{ marginTop: -20 }}>
                    <RadioButton
                      onClick={() => handleChangePeriod('segunda a sexta')}
                      type="button"
                    >
                      <div
                        className={period === 'segunda a sexta' ? 'active' : ''}
                      />
                      <p>Segunda a Sexta</p>
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
                    <option value="Panfletos">Panfletos</option>
                    <option value="Google">Google</option>
                    <option value="Linkedin">Linkedin</option>
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
              {showNextButton && (
                <Button type="submit">
                  {loading && <LoadingDots />}
                  {step === 5 && !loading && 'Concluir'}
                  {!loading && step !== 5 && 'Avançar'}
                </Button>
              )}

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
            <IoMdClose color="var(--text)" size={24} onClick={close} />
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
            <p>Logo um de nossos atendentes irá entrar em contato.</p>
          </footer>
          <Lottie
            options={defaultOptions}
            style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }}
            width="100%"
            height="100%"
            isClickToPauseDisabled
          />
        </ContainerFinish>
      )}

      <AnimatePresence exitBeforeEnter>
        {showModalDescribeYourNeed && (
          <ModalDescribeYourNeedOverlay
            onClick={() => setShowModalDescribeYourNeed(false)}
            exit={{ opacity: 0 }}
          >
            <DescribeYourNeedBox
              onClick={(event: MouseEvent) => event.stopPropagation()}
              initial={{ y: -600, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -600, opacity: 0 }}
            >
              <header>
                <h3>Descreva qual a sua necessidade</h3>

                <IoMdClose
                  size={18}
                  onClick={() => setShowModalDescribeYourNeed(false)}
                />
              </header>
              <Form onSubmit={handleDescribeYourNeed}>
                <Textarea name="plan" rows={8} placeholder="Escreva aqui" />
                <Button type="submit">Avançar</Button>
              </Form>
            </DescribeYourNeedBox>
          </ModalDescribeYourNeedOverlay>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default SignUp;
