import axios from 'axios';

export async function getAll() {
  const users = await axios.get('http://localhost:3001/register/get-all')
    .then((response) => response.data);
  return users;
}

export async function create(name, email, password, role) {
  await axios.post('http://localhost:3001/register',
    { name, email, password, role });
  // .then((response) => response.json())
  // .then((response) => console.log(response))
  // .catch(alert => console.log(alert))
}

export async function validate(email, password) {
  const result = await axios.post('http://localhost:3001/login', {
    email, password,
  })
    .then((response) => response.data);
  return result;
}

export async function validateEmailRegistered(email) {
  const result = await axios.get(`http://localhost:3001/register/check-email-registered/${email}`)
    .then(() => '').catch((error) => error.response.data.message);
  return result;
}
