const cartModel = require('../models/cartModel');

const addSale = (userId, total, street, number, data, status) => {
  return cartModel.addSale(userId, total, street, number, data, status);
}

module.exports = {
  addSale,
};
