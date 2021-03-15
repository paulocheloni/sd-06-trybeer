const { endpoint } = require('./utils');

const login = (email, password) => fetch(`${endpoint}/user/login`, {
  method: 'post',
  headers: {
    'Content-type': 'application/json',
  },
  body: JSON.stringify({ email, password }),
})
  .then((response) => response.json());
// .then(result => result);

const register = (name, email, password, role) => fetch(`${endpoint}/user/register`, {
  method: 'post',
  headers: {
    'Content-type': 'application/json',
  },
  body: JSON.stringify({ name, email, password, role }),
})
  .then((response) => response.json());

module.exports = {
  login,
  register,
};
