import axios from 'axios';

const path = 'http://localhost:3001/login';

const fetchUserByEmail = async(email, password) => {
  try {
    const user = await axios.post(path, { email, password });
    return user.data;
  } catch (error) {
    // console.log(error);
    alert('Usuário não encontrado!');
  }
};

const fetchAllUsers = async () => { axios
  .get(path).then((data) => data);
};

export default {
  fetchUserByEmail,
  fetchAllUsers,
}