const getOrder = require('../models/ordersModel');

const getOrders = (userId) => getOrder(userId);

module.exports = getOrders;