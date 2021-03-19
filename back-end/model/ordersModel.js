const connection = require('./connection');

const salesColumns = 'user_id, total_price, delivery_address, delivery_number, sale_date, status';

const createOrders = async ({ userId, totalPrice, address, number, date, status }) => {
  await connection.execute(`INSERT INTO Trybeer.sales (${salesColumns}) VALUES (?,?,?,?,?,?)`, [
    userId,
    totalPrice,
    address,
    number,
    date,
    status,
  ]);
};

const createProductsSales = async ({ productId, quantity }) => {
  await connection.execute(
    'INSERT INTO Trybeer.sales_products (sale_id, product_id, quantity) VALUES (?,?,?)',
    [productId, quantity],
  );
};

module.exports = {
  createOrders,
  createProductsSales,
};
