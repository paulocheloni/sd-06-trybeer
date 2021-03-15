const axios = require('axios');

const url = 'http://localhost:3001';

const generateToken = async (email, password) => {
  return await axios.post(`${url}/login`, {
    email,
    password,
  })
  .then((res) => res.data)
  .catch((err) => {
    if (err.response) {
      return err.response.data;
    }
  });
};

const registerUser = async (name, email, password, role) => {
  return await axios.post(`${url}/register`, {
    name,
    email,
    password,
    role,
  })
  .then((res) => res.data)
  .catch((err) => {
    if (err.response) {
      return err.response.data;
    }
  });
};

module.exports = {
  generateToken,
  registerUser,
};
