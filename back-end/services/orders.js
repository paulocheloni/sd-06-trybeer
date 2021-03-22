const models = require('../models/orders');

const createOrder = (email, totalPrice, street, checkoutProducts) => models.createOrder(email,totalPrice, street, checkoutProducts)

module.exports = {
  createOrder,
}