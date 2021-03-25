const models = require('../models/admin');

const getAllOrders = async () => models.getAllOrders();

module.exports = {
  getAllOrders,
};