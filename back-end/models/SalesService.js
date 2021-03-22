const moment = require('moment');
const connection = require('./connection');

const createOne = async (data) => {
  const { userId, price, address, number, status } = data;
  const date = moment().format('YYYY-MM-DD HH:mm:ss');
  const [sale] = await connection.execute(
    'INSERT INTO sales (user_id, total_price, delivery_address, delivery_number, sale_date, status)'
     + 'VALUES(?, ?, ?, ?, ?, ?)',
    [userId, price, address, number, date, status],
  );
  return { insertId: sale.insertId, date };
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