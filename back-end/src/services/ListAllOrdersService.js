const Orders = require('../models/Orders');
const Login = require('../models/Login');

// Componente de repostas https
const { status } = require('../util/dataStatus');

const { sucess } = status;

const listAllOrders = async (email) => {
  const user = await Login.findByEmail(email);
  const user_id = user[0].id;

  const orders = await Orders.listAllOrders(user_id);

  return { status: sucess, message: orders };
};

module.exports = listAllOrders;
