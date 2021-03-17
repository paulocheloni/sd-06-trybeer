import axios from 'axios';

const path = 'http://localhost:3001';

const fetchUserByEmail = async (email, password) => {
  try {
    const user = await axios.post(`${path}/login`, { email, password });
    return user.data;
  } catch (error) {
    console.error(error);
  }
};

const fetchAllProducts = async () => {
  console.log('teste');
  try {
    const products = await axios.get(`${path}/products`);
    console.log(products);
    return products;
  } catch (error) {
    console.error(error);
  }
};

const updateUserName = async (email, name) => {
  await axios.put(`${path}/profile`, { email, name });
};

const createUser = async (email, name, password, role) => {
  const newUserToken = await axios
    .post(`${path}/register`, { email, name, password, role });
  return newUserToken.data;
};

export default {
  fetchUserByEmail,
  updateUserName,
  fetchAllProducts,
  createUser,
};
