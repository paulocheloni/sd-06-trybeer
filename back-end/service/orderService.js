const { getOrder, getDetailOrder, getAllOrder } = require('../models/ordersModel');

const getOrders = (userId) => getOrder(userId);

const getDetailOrders = async (saleId) => getDetailOrder(saleId);


module.exports = { getOrders, getDetailOrders };