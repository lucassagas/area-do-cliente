import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useHistory } from 'react-router-dom';
import jwt from 'jsonwebtoken';
import api from '../services/api';

interface AuthState {
  token: string;
  user: {
    name: string;
    document: string;
    code: string;
    name_abbreviate: string;
    id: string;
    first_access: boolean;
  };
}

interface SignInCredentials {
  username: string;
  password: string;
  rememberMe?: string[];
}

interface AuthContextData {
  user: {
    name: string;
    document: string;
    code: string;
    name_abbreviate: string;
    id: string;
    first_access: boolean;
  };
  loading: boolean;
  alertPassword: boolean;
  setAlertPassword(data: boolean): void;
  setLoading(data: boolean): void;
  setData(data: object): void;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [alertPassword, setAlertPassword] = useState<boolean>(false);
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@NeoCliente:token');
    const user = localStorage.getItem('@NeoCliente:user');

    if (token && user) {
      api.defaults.headers.tokenaccess = token;

      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const history = useHistory();

  useEffect(() => {
    const storagedToken = localStorage.getItem('@NeoCliente:token');

    if (storagedToken) {
      jwt.verify(
        storagedToken,
        `${process.env.REACT_APP_KEY}` as string,
        (error: object | null) => {
          if (error) {
            localStorage.removeItem('@NeoCliente:token');
            history.push('/');
          }
        },
      );
    }
  }, [history]);

  const signIn = useCallback(async ({ username, password, rememberMe }) => {
    setLoading(true);
    const response = await api.post('/customers/login', {
      username,
      password,
      rememberMe,
    });
    const { token, user } = response.data;

    api.defaults.headers.tokenaccess = token;
    localStorage.setItem('@NeoCliente:token', token);
    localStorage.setItem('@NeoCliente:user', JSON.stringify(user));

    setData({ token, user });
    setLoading(false);
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@NeoCliente:token');
    localStorage.removeItem('@NeoCliente:user');

    setData({} as AuthState);
    history.push('/');
  }, [history]);

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        signIn,
        signOut,
        loading,
        setLoading,
        setData,
        setAlertPassword,
        alertPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
