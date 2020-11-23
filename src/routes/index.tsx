import React from 'react';
import Layout from '../components/Layout';
import { useAuth } from '../hooks/auth';
import AuthRoutes from './auth.routes';

const Routes: React.FC = () => {
  const { user } = useAuth();

  return user ? <Layout /> : <AuthRoutes />;
};

export default Routes;
