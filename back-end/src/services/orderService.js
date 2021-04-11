const Model = require('../models/orderModels');

const create = async ({ userID, value, street, number, date }) => {
  const orders = await Model.create({ userID, value, street, number, date });
  return orders;
};

// Get all users
const getAll = async () => Model.getSales();

// Get id sale
const getBySalesId = async (id) => {
  const sale = await Model.getBySales(id);
  return sale;
};

module.exports = { 
  create,
  getAll,
  getBySalesId,
};
