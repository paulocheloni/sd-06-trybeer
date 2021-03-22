const connection = require('./connection');

const listAllOrders = async (userId) => {
  const [orders] = await connection.execute('SELECT * from sales WHERE userId = ?', [userId]);
  return orders;
};

const getByIdOrder = async (id) => {
  const [order] = await connection.execute('SELECT * from sales WHERE id = ?', [id]);
  return order;
};

module.exports = {
  listAllOrders,
  getByIdOrder,
};