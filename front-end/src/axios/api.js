import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

api.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem('user'));
  try {
    if (user) {
      config.headers.Authorization = user.token;
    }
    return config;
  } catch (err) {
    console.log('err', err);
  }
});

export default api;
