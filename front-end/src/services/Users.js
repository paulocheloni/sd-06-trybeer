const { endpoint } = require('./utils');

const applicationJsonContent = 'application/json';

const login = (email, password) => fetch(`${endpoint}/user/login`, {
  method: 'post',
  headers: {
    'Content-type': applicationJsonContent,
  },
  body: JSON.stringify({ email, password }),
})
  .then((response) => response.json());
// .then(result => result);

const register = (name, email, password, role) => fetch(`${endpoint}/user/register`, {
  method: 'post',
  headers: {
    'Content-type': applicationJsonContent,
  },
  body: JSON.stringify({ name, email, password, role }),
})
  .then((response) => response.json());

const updateUser = (name, email, token) => fetch(`${endpoint}/user/update`, {
  method: 'put',
  headers: {
    'Content-type': applicationJsonContent,
    authorization: token,
  },
  body: JSON.stringify({ name, email }),
}).then((response) => response);

module.exports = {
  login,
  register,
  updateUser,
};
