const Sales = require('../models/Sales');
const Login = require('../models/Login');

// Componente de repostas https
const { status, messages } = require('../util/dataStatus');

const { sucess } = status;

const createSale = async (email, total_price, delivery_address, delivery_number, statusSale, cart) => {
  const user = await Login.findByEmail(email);
  const user_id = user[0].id;
  const salesExists = await Sales.createSale(user_id, total_price, delivery_address, delivery_number, statusSale, cart);

  return { status: sucess, message: 'Cadastro de venda efetuado com sucesso!' };
};

module.exports = createSale;