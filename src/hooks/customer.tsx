import React, { createContext, useCallback, useContext, useState } from 'react';
import ModalChangePassword from '../components/ModalChangePassword';
import api from '../services/api';
import { useAuth } from './auth';

interface ICustomerData {
  id: string;
  name: string;
  date_birth: string;
  email: string;
  nickname?: string;
  number_cel?: string;
  number_cel2?: string;
  number_phone?: string;
  number_phone2?: string;
  cep: string;
  street: string;
  street_number: string;
  neigh: string;
  complement?: string;
  reference?: string;
  state: string;
  city: string;
  contracts: Array<{
    id: string;
    plan: string;
    status: string;
  }>;
}

interface IBilletFormat {
  id: string;
  valor: string;
  status: string;
  data_vencimento: string;
  linha_digitavel: string;
}

interface IBilletData {
  bol_activies: IBilletFormat[];
  bol_pay: IBilletFormat[];
  bol_late: IBilletFormat[];
  bol_detached: IBilletFormat[];
}

interface CustomerContextData {
  customer?: ICustomerData;
  billets?: IBilletData;
  displayModalPassword: boolean;
  displayModalFirstAccess: boolean;
  setDsiplayModalPassword(data: boolean): void;
  setDisplayModalFirstAccess(data: boolean): void;
  handleLoadBillets(contract: string): Promise<void>;
  handleLoadCustomer(): Promise<void>;
  contractId: string;
  setContractId: (data: string) => void;
}

const CustomerContext = createContext<CustomerContextData>(
  {} as CustomerContextData,
);

const CustomerProvider: React.FC = ({ children }) => {
  const [customer, setCustomer] = useState<ICustomerData>();
  const [billets, setBillets] = useState<IBilletData>();
  const [contractId, setContractId] = useState<string>('');
  const [displayModalPassword, setDsiplayModalPassword] = useState<boolean>(
    false,
  );
  const [displayModalFirstAccess, setDisplayModalFirstAccess] = useState<
    boolean
  >(false);

  const { user } = useAuth();

  const handleLoadCustomer = useCallback(async () => {
    if (user) {
      const response = await api.get(`customers/${user.code}/info/personal`);
      setCustomer(response.data);
    }
  }, [user]);

  const handleLoadBillets = useCallback(
    async data => {
      const response = await api.get(
        `customers/${user.code}/info/financial/${data}`,
      );

      setBillets(response.data);
    },
    [user],
  );

  return (
    <CustomerContext.Provider
      value={{
        customer,
        billets,
        handleLoadBillets,
        handleLoadCustomer,
        displayModalPassword,
        setDsiplayModalPassword,
        displayModalFirstAccess,
        setDisplayModalFirstAccess,
        contractId,
        setContractId,
      }}
    >
      {children}
      <ModalChangePassword close title="Alterar senha" />
    </CustomerContext.Provider>
  );
};

function useCustomer(): CustomerContextData {
  const context = useContext(CustomerContext);

  if (!context) {
    throw new Error('useCustomer must be used within an CustomerProvider');
  }

  return context;
}

export { CustomerProvider, useCustomer };
