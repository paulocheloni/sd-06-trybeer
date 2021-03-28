const connection = require('./connection');

// Get all orders
const getAll = async () => {
  const [orders] = await connection.execute('SELECT * FROM sales');
  return orders;
};

const create = async ({ priceTotal, date, userID, address, number }) => {
  try {
    await connection.execute(
      `INSERT INTO sales
        (user_id, total_price, delivery_address, delivery_number, sale_date, status)
        VALUES (?, ?, ?, ?, ?, ?)`,
      [userID, priceTotal, address, number, date, 'Pendente'],
    );
  } catch (error) {
    console.error(error);
  }
};

const createSaleProduct = async (saleId, productId, quantity) => {
  try {
    await connection.execute(
      `INSERT INTO sales_products
        (sale_id, product_id, quantity)
        VALUES (?, ?, ?)`,
      [saleId, productId, quantity],
    );
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  create,
  getAll,
  createSaleProduct,
};
