const ordersModel = require('../models/OrdersModel');

const createOrderService = async (sale) => {
  const {
    userId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
  } = sale;

  const status = 'Pendente';

  const newOrder = await ordersModel
  .createOrder({ userId, totalPrice, deliveryAddress, deliveryNumber, status });
  
  return newOrder;
};

const alter = async ({ id, status }) => ordersModel.alter({ id, status });

const getAll = async () => ordersModel.getAll();

const getAllByUser = async (id) => ordersModel.getAllByUser(id);

module.exports = {
  createOrderService,
  getAll,
  getAllByUser,
  alter,
};