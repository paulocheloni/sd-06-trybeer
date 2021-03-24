const Orders = require('../model/Orders');

exports.getAll = async (userId) => Orders.getAll(userId);
