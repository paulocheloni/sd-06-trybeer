const axios = require('axios');

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export const getUserByEmail = async (user) => {
  const requestResponse = await api.post('login', user)
    .then((response) => response.data)
    .catch((error) => (error.response.data));

  return requestResponse;
};

export const createNewUSer = async (user) => {
  const requestResponse = await api.post('register', user)
    .then((response) => response.data)
    .catch((error) => error.response.data);

  return requestResponse;
};

export const getAllProducts = async () => {
  const requestResponse = await api.get('products')
    .then((response) => response.data)
    .catch((error) => error.response.data);

  return requestResponse;
};

export const updateUser = async (newName, email) => {
  const requestResponse = await api.put('profile', { email, newName });

  return requestResponse;
};

export const saveSale = async (sale) => {
  const requestResponse = await api.post('checkout', sale)
    .then((response) => response.data)
    .catch((error) => error.response.data);

  return requestResponse;
};

export const getAllSales = async () => {
  const requestResponse = await api.get('admin/orders')
    .then((response) => response.data)
    .catch((error) => error.response.data);

  return requestResponse;
};

export const getAllOrders = async (email) => {
  const requestResponse = await api.post('orders', { email })
    .then((response) => response.data)
    .catch((error) => error.response.data);

  return requestResponse;
};

export const getOrderDetails = async (id) => {
  const numberId = parseInt(id, 10);
  console.log(typeof id);
  console.log(typeof id);
  const requestResponse = await api.get(`orders/${id}`)
    .then((response) => response.data)
    .catch((error) => error.response.data);

  return requestResponse;
};
