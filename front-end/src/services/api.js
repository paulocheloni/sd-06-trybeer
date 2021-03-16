const axios = require('axios');

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export const getUserByEmail = async (user) => {
  const response = await api.post('login', user)
    .then((response) => response.data)
    .catch((error) => error.response.data);

  return response;
};

export const createNewUSer = async (user) => {
  const response = await api.post('register', user)
    .then((response) => response.data)
    .catch((error) => error.response.data);

  console.log(response)
  return response;
};
