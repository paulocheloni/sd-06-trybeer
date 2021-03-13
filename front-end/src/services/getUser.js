import axios from 'axios';

const path = 'http://localhost:3001/login';

const fetchUser = async (email, password) => axios
  .post(path, { email, password })
  .then((data) => data);

export default fetchUser;
