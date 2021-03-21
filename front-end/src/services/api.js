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

const updateNameOfUser = async (name, email) => {
  console.log('axios', name, email);
  return axios
    .put(`${baseUrl}/user`, {
      name,
      email,
    })
    .then((res) => res.data)
    .catch((err) => err.response.data);
};

const getAllProducts = () => [
  {
    id: 1,
    name: 'Skol Lata 250ml',
    price: 2.20,
    image: 'http://localhost:3001/images/Skol Lata 350ml.jpg',
  },
  {
    id: 2,
    name: 'Heineken 600ml',
    price: 7.50,
    image: 'http://localhost:3001/images/Heineken 600ml.jpg',
  },
  {
    id: 3,
    name: 'Antarctica Pilsen 300ml',
    price: 2.49,
    image: 'http://localhost:3001/images/Antarctica Pilsen 300ml.jpg',
  },
];

// axios
//   .get(`${baseUrl}/products`)
//   .then((res) => res.data)
//   .catch((err) => err.response.data);

module.exports = {
  generateToken,
  registerUser,
  updateNameOfUser,
  getAllProducts,
};
