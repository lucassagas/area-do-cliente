import axios from 'axios';
import jwt from 'jsonwebtoken';
import { useHistory } from 'react-router-dom';

const api = axios.create({
  baseURL: 'http://10.10.0.99:3333',
});

api.interceptors.response.use(response => {
  if (response.data.error) {
    const history = useHistory();
    const token: any = localStorage.getItem('@ALAuth:token');
    jwt.verify(token, 'dsddhksdhgvsyguvygusfjilfeabhj', (error: any) => {
      if (error) {
        localStorage.removeItem('@ALAuth:token');
        history.push('/');
      }
    });

    return response;
  }

  return response;
});

export default api;
