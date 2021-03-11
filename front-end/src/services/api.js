export const getUserByEmail = async (email) => fetch('http://localhost:3001/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ email }),
}).then((response) => response.json());

export const getAllUsers = () => fetch('http://localhost:3001/users')
  .then((response) => response.json());
