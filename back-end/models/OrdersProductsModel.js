const connection = require('./connection');

const createOrderProduct = async ({ item }) => {
  const { saleId, id, quantity } = item;

  await connection.execute(
    'INSERT INTO sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
    [saleId, id, quantity],
  );
};

const getAll = async () => {
  const [orders] = await connection.execute('SELECT * FROM sales');
  return orders;
};

module.exports = {
  createOrderProduct,
  getAll,
};