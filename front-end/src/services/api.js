const headerType = { 'Content-Type': 'application/json' };

export const getToken = async (token) => fetch('http://localhost:3001/users', {
  method: 'GET',
  headers: {
    authorization: token
  },
}).then((response) => response.json());

export const changeName = async (data) => fetch('http://localhost:3001/users/edit', {
  method: 'PUT',
  headers: headerType,
  body: JSON.stringify(data),
}).then((response) => response.json());

export const registerUser = async (user) => fetch('http://localhost:3001/users/register', {
  method: 'POST',
  headers: headerType,
  body: JSON.stringify(user),
}).then((response) => response.json());

export const getUserByEmail = async (email) => fetch('http://localhost:3001/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ email }),
}).then((response) => response.json());

export const getAllUsers = () => fetch('http://localhost:3001/users')
  .then((response) => response.json());
