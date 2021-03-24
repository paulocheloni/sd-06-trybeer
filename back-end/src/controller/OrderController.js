const rescue = require('express-rescue');

const { OrderService } = require('../service');

const getAllOrders = rescue(async (req, res) => {
  const { id } = req.user;
  const [orders] = await OrderService.getAllOrders(id); 

  return res
    .status(200)
    .json(orders);
});

const getOrdersByDetails = rescue(async (req, res) => {
  const { id } = req.params;

  const [orders] = await OrderService.getOrdersByDetails(id);

  return res
    .status(200)
    .json(orders);
});

module.exports = {
  getOrdersByDetails,
  getAllOrders,
};
