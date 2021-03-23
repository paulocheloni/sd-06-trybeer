const Orders = require('../model/Orders');

exports.getAll = async (userId) => await Orders.getAll(userId);
