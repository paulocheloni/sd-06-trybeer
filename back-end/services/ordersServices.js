const orderModels = require('../models/orderModel');

// Get all orders
const getAll = async () => {
  const orders = await orderModels.getAll();
  return orders;
};

// Create a order
const create = async (priceTotal, date, userID, address, number) => {
  // Achar se existe a ordem
  // if (findByName.length !== 0) {
  //   return { error: true, code: 'conflict', message: 'E-mail already in database.' };
  // }
  const orders = await orderModels.create(priceTotal, date, userID, address, number);
  return orders;
};

module.exports = { getAll, create };
