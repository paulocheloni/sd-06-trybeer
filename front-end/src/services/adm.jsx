const url = 'http://localhost:3001/admin';

const getAllOrders = () => fetch(`${url}/orders`).then((response) => response.json());

module.exports = {
  getAllOrders,
};
