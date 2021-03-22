const axios = require('axios');

const baseUrl = 'http://localhost:3001';

const generateToken = async (email, password) => axios
  .post(`${baseUrl}/login`, {
    email,
    password,
  })
  .then((res) => ({ response: res.data, result: true }))
  .catch((err) => ({ response: err.response.data, result: false }));

const registerUser = async (name, email, password, role) => axios
  .post(`${baseUrl}/user`, {
    name,
    email,
    password,
    role,
  })
  .then((res) => ({ response: res.data, result: true }))
  .catch((err) => ({ response: err.response.data, result: false }));

const updateNameOfUser = async (name, email) => axios
  .put(`${baseUrl}/user`, {
    name,
    email,
  })
  .then((res) => ({ response: res.data, result: true }))
  .catch((err) => err.response.data);

const getAllProducts = async (token) => axios
  .get(`${baseUrl}/products`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  })
  .then((res) => res.data)
  .catch((err) => err.response.data);

module.exports = {
  generateToken,
  registerUser,
  updateNameOfUser,
  getAllProducts,
};
