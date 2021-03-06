import axios from 'axios';
import jwt from 'jsonwebtoken';
import { useHistory } from 'react-router-dom';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.response.use(response => {
  if (response.data.error) {
    const history = useHistory();
    const token: any = localStorage.getItem('@NeoCliente:token');
    jwt.verify(
      token,
      `${process.env.REACT_APP_KEY}` as string,
      (error: object | null) => {
        if (error) {
          localStorage.removeItem('@NeoCliente:token');
          history.push('/');
        }
      },
    );

    return response;
  }

  return response;
});

export default api;
