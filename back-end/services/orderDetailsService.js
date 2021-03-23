const orderDetailsModel = require('../models/adminOrderModel');

const saleDetails = () => orderDetailsModel.saleDetails();

module.exports = {
  saleDetails,
};
