import React, { createContext, useCallback, useContext, useState } from 'react';
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
    ativacao: string;
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
}

interface CustomerContextData {
  customer?: ICustomerData;
  billets?: IBilletData;
  handleLoadBillets(contract: string): Promise<void>;
  handleLoadCustomer(): Promise<void>;
}

const CustomerContext = createContext<CustomerContextData>(
  {} as CustomerContextData,
);

const CustomerProvider: React.FC = ({ children }) => {
  const [customer, setCustomer] = useState<ICustomerData>();
  const [billets, setBillets] = useState<IBilletData>();

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
      value={{ customer, billets, handleLoadBillets, handleLoadCustomer }}
    >
      {children}
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
