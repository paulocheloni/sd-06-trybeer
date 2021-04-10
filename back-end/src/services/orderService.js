const Model = require('../models/orderModels');

const create = async ({ userID, value, street, number, date }) => {
  const orders = await Model.create({ userID, value, street, number, date });
  return orders;
};

module.exports = { create };
