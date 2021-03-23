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
  const status = 'Pendente';

  const newOrder = await ordersModel
  .createOrder({ userId, totalPrice, deliveryAddress, deliveryNumber, status });
  
  return newOrder;
};

const getAll = async () => ordersModel.getAll();

const getAllByUser = async (id) => ordersModel.getAllByUser(id);

module.exports = {
  createOrderService,
  getAll,
  getAllByUser,
};