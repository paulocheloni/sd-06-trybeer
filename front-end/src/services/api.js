import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:3001/",
});

const listLogin = (email, password) => (api.post('/login', {email, password}));

// const testComHeader = (email, password) => (api.post('/login', {email, password}, {headers: { autentication: token}  }));

export default {
  listLogin
};
