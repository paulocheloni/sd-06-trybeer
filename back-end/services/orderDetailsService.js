const orderDetailsModel = require('../models/adminOrderModel');

const saleDetails = (id) => orderDetailsModel.saleDetails(id);

module.exports = {
  saleDetails,
};
