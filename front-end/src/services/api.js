const axios = require('axios');

const url = 'http://localhost:3001';

const generateToken = async (email, password) => axios.post(`${url}/login`, {
  email,
  password,
})
  .then((res) => res.data)
  .catch((err) => {
    if (err.response) {
      return err.response.data;
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
