import axios from 'axios';
import selectUrl from './baseUrl';

const api = axios.create({
  baseURL: selectUrl(),
});

api.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const { token, role } = user;

  try {
    if (token) {
      config.headers.Authorization = token;
    }
    if (role) {
      config.headers.Role = role;
    }
  } catch (err) {
    console.log('err', err);
  }
});

export default api;
