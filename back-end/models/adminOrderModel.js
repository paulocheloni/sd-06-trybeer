const connection = require('./connection');

const allOrders = async () => {
  const [orders] = await connection.execute(
    'SELECT * FROM sales',
  );
  return orders;
};

module.exports = {
  allOrders,
};
