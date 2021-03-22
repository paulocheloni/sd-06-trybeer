const Checkout = require('../model/checkout');

exports.create = async ({
  userId, totalPrice, rua, numero, status,
}) => Checkout.create({
  userId, totalPrice, rua, numero, status,
});
