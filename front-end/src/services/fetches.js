import axios from 'axios';

const path = 'http://localhost:3001';

const fetchUserByEmail = async (email, password) => {
  try {
    const user = await axios.post(`${path}/login`, { email, password });
    return user.data;
  } catch (error) {
    alert('Usuário não encontrado!');
  }
};

const fetchAllProducts = async () => {
  console.log('teste');
  try {
    const products = await axios.get(`${path}/products`);
    return products;
  } catch (error) {
    alert('Erro');
  }
/*   await axios
    .get(`${path}/products`).then((response) => {
      console.log(response.data);
      return response.data;
    }); */
};

const updateUserName = async (email, name) => {
  await axios.put(`${path}/profile`, { email, name });
};

export default {
  fetchUserByEmail,
  updateUserName,
  fetchAllProducts,
};
