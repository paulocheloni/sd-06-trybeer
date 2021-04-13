const connection = require('../database/connection');

const create = async ({ userID, value, street, number, date }) => {
  const [ordes] = await connection.execute(
      `INSERT INTO sales
        (user_id, total_price, delivery_address, delivery_number, sale_date, status)
        VALUES (?, ?, ?, ?, ?, ?)`,
      [userID, value, street, number, date, 'Pendente'],
    );
    return ordes;
  };

const getSales = async () => {
  const [sales] = await connection.execute(
    'SELECT * FROM Trybeer.sales',
  );
  return sales;
};

const getBySales = async (id) => {
  const [sales] = await connection.execute(
    'SELECT * FROM Trybeer.sales WHERE id = (?)', [id],
  );
  return sales;
};

const createSaleProduct = async (saleId, productId, quantity) => {
  await connection
    .execute('INSERT INTO sales_products (sale_id, product_id, quantity) VALUES(?,?,?)',
    [saleId, productId, quantity]);
};

module.exports = {
  create,
  getSales,
  getBySales,
  createSaleProduct,
};
