const moment = require('moment');
const connection = require('./connection');

const createOne = async (SaleId, quantity, ProductId, saleData) => {
  const { userId, price, address, number, status } = saleData;
  const query = 'INSERT INTO sale_products (sale_id, product_id, quantity) VALUES (?, ?, ?);'
+ 'INSERT INTO sales (user_id, total_price, delivery_address, delivery_number, sale_date, status)'
+ 'VALUES(?, ?, ?, ?, ?, ?)';
  const date = moment().format('YYYY-MM-DD HH:mm:ss');
  const [saleDetails, sale] = await connection.execute(query,
    [SaleId, quantity, ProductId, userId, price, address, number, date, status]);
  return [saleDetails, sale];
};

const getAllByUserId = async (id) => {
  const sales = await connection.execute(
    'SELECT * FROM sales WHERE user_id = ?', [id],
);
  return sales;
};

const getAllOrders = async () => {
  const sales = await connection.execute(
    'SELECT * FROM sales',
);
  return sales;
};

module.exports = {
  createOne, getAllByUserId, getAllOrders,
};