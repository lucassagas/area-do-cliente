import React, { createContext, useCallback, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../services/api';

interface AuthState {
  token: string;
  user: {
    name: string;
    document: string;
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
  };
  loading: boolean;
  setLoading(data: boolean): void;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@NeoCliente:token');
    const user = localStorage.getItem('@NeoCliente:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const history = useHistory();

  const signIn = useCallback(async ({ username, password, rememberMe }) => {
    setLoading(true);
    const response = await api.post('/customers/login', {
      username,
      password,
      rememberMe,
    });
    const { token, user } = response.data;

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
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, loading, setLoading }}
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
