import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/',
});

const listLogin = (email, password) => (api.post('/login', { email, password }));

// const testComHeader = (email, password) => (api.post('/login', {email, password}, {headers: { autentication: token}  }));

const createUser = (name, email, password, role) => (api.post(
  '/user/register', { name, email, password, role },
));

const updateUser = (name, email) => (api.put('/user/update', { name, email }));

const listProducts = () => (api.get('/products'));

const createSale = (dataSale) => {
  console.log(dataSale);
  return api.post('/sales', dataSale);
};

export default {
  listLogin,
  createUser,
  updateUser,
  listProducts,
  createSale,
};
