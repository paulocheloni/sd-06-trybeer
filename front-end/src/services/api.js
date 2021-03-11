import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:3001/",
});

const listLogin = (email, password) => (api.post('/login', {email, password}));

export default {
  listLogin
};
