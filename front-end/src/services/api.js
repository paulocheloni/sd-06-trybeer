const axios = require('axios');

const url = 'http://localhost:3001';

const generateToken = async (email, password) => axios
  .post(`${url}/login`, {
    email,
    password,
  })
  .then((res) => ({ response: res.data, result: true }))
  .catch((err) => ({ response: err.response.data, result: false }));

const registerUser = async (name, email, password, role) => axios
  .post(`${url}/user`, {
    name,
    email,
    password,
    role,
  })
  .then((res) => ({ response: res.data, result: true }))
  .catch((err) => ({ response: err.response.data, result: false }));

const updateNameOfUser = async (name, email) => axios
  .put(`${url}/user`, {
    name,
    email,
  })
  .then((res) => ({ response: res.data, result: true }))
  .catch((err) => err.response.data);

const listProducts = async () => axios
  .get(`${url}/products`)
  .then((res) => ({ response: res.data, result: true }))
  .catch((err) => err.response.data);

const regSalesProducts = async (params) => axios
  .post(`${url}/sales/products`, {
    idSale: params.idSale,
    idProduct: params.idProduct,
    quantity: params.quantity,
  })
  .then((res) => ({ response: res.data, result: true }))
  .catch((err) => ({ response: err.response.data, result: false }));

const registerSales = async (params) => axios
  .post(`${url}/sales`, {
    userId: params.userId,
    total: params.total,
    address: params.address,
    adNumber: params.adNumber,
    date: params.date,
    status: params.status,
  })
  .then((res) => ({ response: res.data, result: true }))
  .catch((err) => ({ response: err.response, result: false }));

module.exports = {
  generateToken,
  registerUser,
  updateNameOfUser,
  listProducts,
  regSalesProducts,
  registerSales,
};
