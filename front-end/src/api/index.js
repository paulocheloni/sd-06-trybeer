import axios from 'axios';

export async function getAll() {
  const users = await axios.get('http://localhost:3001/register/get-all')
    .then((response) => response.data);
  return users;
}

export async function create(name, email, password, role) {
  try {
    const user = await axios.post('http://localhost:3001/register',
      { name, email, password, role })
      .then((response) => response.data);
    return user;
  } catch (error) {
    if (error.response) {
      return {
        status: error.response.status,
        statusText: error.response.statusText,
        message: error.response.data.message,
      };
    }
  }
}

export async function validate(email, password) {
  const result = await axios.post('http://localhost:3001/login', {
    email, password,
  })
    .then((response) => response.data);
  return result;
}
