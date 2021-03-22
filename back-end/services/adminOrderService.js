const adminOrderModel = require('../models/adminOrderModel');

const allOrders = () => adminOrderModel.allOrders();

module.exports = {
  allOrders
};
