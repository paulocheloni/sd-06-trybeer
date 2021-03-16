import axios from 'axios';

const path = 'http://localhost:3001';

const fetchUserByEmail = async (email, password) => {
  try {
    const user = await axios.post(`${path}/login`, { email, password });
    return user.data;
  } catch (error) {
    // console.log(error);
    alert('Usuário não encontrado!');
  }
};

const fetchAllUsers = async () => {
  axios
    .get(`${path}/login`).then((data) => data);
};

const updateUserName = async (email, name) => {
  await axios.put(`${path}/profile`, { email, name });
};

export default {
  fetchUserByEmail,
  fetchAllUsers,
  updateUserName,
};
