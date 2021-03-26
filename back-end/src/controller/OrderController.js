const rescue = require('express-rescue');

const { OrderService } = require('../service');

const getAllOrders = rescue(async (req, res) => {
  const [orders] = await OrderService.getAllOrders();

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

const updateStatusOrder = rescue(async (req, res) => {
  const { status } = req.body;
  const { id } = req.params;

  const update = await OrderService.updateStatusOrder(status, id);

  return res
    .status(200)
    .json(update);
});

module.exports = {
  getOrdersByDetails,
  getAllOrders,
  updateStatusOrder,
};