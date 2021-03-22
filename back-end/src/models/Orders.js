const connection = require('./connection');

const listAllOrders = async (user_id) => {
  const [orders] = await connection.execute('SELECT * from sales WHERE user_id = ?', [user_id]);
  return orders;
};

const getByIdOrder = async (id) => {
  const [order] = await connection.execute('SELECT * from sales WHERE id = ?', [id]);
  return order;
}

module.exports = {
  listAllOrders,
  getByIdOrder,
};