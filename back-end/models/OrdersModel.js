const connection = require('../database/connection');

const listOrdersByUser = async (userId) => connection.execute('SELECT * FROM sales WHERE user_id = ?', [userId]);
const getOrderById = async (id) => connection.execute('SELECT * FROM sales WHERE id = ?', [id]);

module.exports = { listOrdersByUser, getOrderById };