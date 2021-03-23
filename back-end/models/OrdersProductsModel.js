const connection = require('./connection');
const table = 'sales_products';

const createOrderProduct = async ({ item }) => {
  const { saleId, id, quantity } = item;

  await connection.execute(
    `INSERT INTO ${table} (sale_id, product_id, quantity) VALUES (?, ?, ?)`,
    [saleId, id, quantity],
  );
};

const getAll = async () => {
  const [orders] = await connection.execute(`SELECT * FROM ${table}`);
  return orders;
};

const getById = async (id) => {
  const [order] = await connection.execute(`SELECT * FROM ${table} WHERE sale_id=?`,
  [id]);
  return order;
};

module.exports = {
  createOrderProduct,
  getAll,
  getById,
};