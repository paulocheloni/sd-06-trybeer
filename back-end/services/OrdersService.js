const ordersModel = require('../models/OrdersModel');

const createOrderService = async (sale) => {
  const {
    userId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
  } = sale;

  const date = new Date();

  const part1Date = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  const part2Date = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

  const saleDate = `${part1Date} ${part2Date}`;
  const status = 'pendente';
  const newOrder = await ordersModel
  .createOrder({ userId, totalPrice, deliveryAddress, deliveryNumber, saleDate, status });
  
  return newOrder;
};

const getAll = async () => ordersModel.getAll();

module.exports = {
  createOrderService,
  getAll,
};