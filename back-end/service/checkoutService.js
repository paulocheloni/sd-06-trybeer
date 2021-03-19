const checkOrders = require('../models/checkoutModel');

const OrdersDone = (sale) => checkOrders(sale);

module.exports = OrdersDone;