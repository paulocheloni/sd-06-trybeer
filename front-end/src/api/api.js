import * as axiosHandler from 'axios';

const buildAxiosHandler = () => {
  const axios = axiosHandler.create({
    baseURL: 'http://localhost:3001',
  });

  return axios;
};

export const login = (user) => {
  console.log("user", user)
  const axios = buildAxiosHandler();

  return axios.post('/login', user);
};
