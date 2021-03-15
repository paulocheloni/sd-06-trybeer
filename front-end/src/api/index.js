import * as axiosHandler from 'axios';

const buildAxiosHandler = () => {
  const axios = axiosHandler.create({
    baseURL: 'http://localhost:3001',
  });

  return axios;
};

function login(user) {
  const axios = buildAxiosHandler();

  return axios.post('/login', user);
}

function test() {
  return '';
}

export {
  login,
  test,
};
