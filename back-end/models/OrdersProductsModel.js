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
  const [order] = await connection.execute(`SELECT
    products.name, products.price, sales_products.quantity
    FROM sales_products INNER JOIN products
    ON products.id = sales_products.product_id
    WHERE sales_products.sale_id = ${id}`,
    [id]);
  return order;
};

const getByIdAdmin = async (id) => {
  const [order] = await connection.execute(`SELECT
    products.name, products.price, sales_products.quantity,
    sales_products.sale_id, sales.status, sales.total_price
    FROM sales_products INNER JOIN products
    ON products.id = sales_products.product_id
    INNER JOIN sales ON sales.id = sales_products.sale_id
    WHERE sales_products.sale_id = ?`,
    [id]);
    console.log(order);
  return order;
};

module.exports = {
  createOrderProduct,
  getAll,
  getById,
  getByIdAdmin,
};