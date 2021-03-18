const ordersModel = require('../models/OrdersModel');

const createOrderService = async (sale) => {
  const {
    userId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
  } = sale;
  const date = new Date();
  const saleDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  console.log(saleDate)
  const status = 'pendente';
  const newOrder = await ordersModel
  .createOrder({ userId, totalPrice, deliveryAddress, deliveryNumber, saleDate, status });
  return newOrder;
}

const getAll = async () => await ordersModel.getAll();

module.exports = {
  createOrderService,
  getAll,
};