import axios from 'axios';

const path = 'http://localhost:3001';

const fetchUserByEmail = async (email, password, token) => {
  try {
    const user = await axios.post(`${path}/login`,
      { email, password },
      { headers: { authorization: token } });
    return user.data;
  } catch (error) {
    console.error(error);
  }
};

const fetchAllProducts = async () => {
  try {
    const products = await axios.get(`${path}/products`);
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

const createOrder = async (token, objOrder) => {
  console.log('pedido', objOrder);
  const newOrder = await axios.post(`${path}/orders`,
    { objOrder },
    { headers: { authorization: token } });
  return newOrder.data;
};

export default {
  fetchUserByEmail,
  updateUserName,
  fetchAllProducts,
  createUser,
  createOrder,
};
