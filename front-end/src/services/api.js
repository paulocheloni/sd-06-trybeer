const axios = require('axios');

const url = 'http://localhost:3001';

const generateToken = async (email, password) => axios.post(`${url}/login`, {
  email,
  password,
})
  .then((res) => ({ response: res.data, result: true }))
  .catch((err) => {
    if (err.response) {
      return { response: err.response.data, result: false };
    }
  });

const registerUser = async (name, email, password, role) => axios
  .post(`${url}/register`, {
    name,
    email,
    password,
    role,
  })
  .then((res) => res.data)
  .catch((error) => {
    if (error.response) {
      return error.response.data;
    }
  });

module.exports = {
  generateToken,
  registerUser,
};
