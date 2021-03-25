const connection = require('./connection');

const getAllOrders = async () => {
  const [orderSales] = await connection.execute('SELECT * FROM Trybeer.sales;');

  return orderSales;
};

module.exports = {
  getAllOrders,
};