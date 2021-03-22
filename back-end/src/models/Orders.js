const connection = require('./connection');

const listAllOrders = async (userId) => {
  const [orders] = await connection.execute('SELECT * from sales WHERE userId = ?', [userId]);
  return orders;
};

const getByIdOrder = async (id) => {
  const [order] = await connection.execute('SELECT * from sales WHERE id = ?', [id]);
  return order;
};

const getByIdDetails = async (id) => {
  const order = await connection.execute(
    `SELECT
      sales.id AS id,
      sales.sale_date AS saleDate,
      products.name AS name,
      sales_products.product_id AS productId,
      sales_products.quantity AS productQty,
      ROUND(products.price * sales_products.quantity, 2) AS totalPrice
    FROM sales
    JOIN sales_products
    ON sales_products.sale_id = sales.id
    JOIN products
    ON products.id = sales_products.product_id
    WHERE sales.id = ?`, [id]
  );

  return order;
}

module.exports = {
  listAllOrders,
  getByIdOrder,
  getByIdDetails,
};