const ordersModel = require('../models/OrdersModel');

const createOrderService = async (sale) => {
  const {
    userId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
  } = sale;
<<<<<<< HEAD
  const status = 'Pendente';
=======

  const date = new Date();

  const part1Date = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  const part2Date = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

  const saleDate = `${part1Date} ${part2Date}`;
  const status = 'Pendente';

>>>>>>> 96ee6f8ca0fdcaf22c3832d784df12b431d20e7e
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