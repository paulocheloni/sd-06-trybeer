import axios from 'axios';

const path = 'http://localhost:3001/login';

const fetchAllUsers = async () => axios
  .get(path).then((data) => data);

export default fetchAllUsers;
