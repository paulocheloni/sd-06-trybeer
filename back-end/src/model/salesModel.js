const connection = require('./connection');

const getAll = async () => {
  const [sales] = await connection.execute('SELECT * FROM Trybeer.sales');

  return sales;
};

const getSalesByUserId = async (userId) => {
  const [sales] = await connection.execute('SELECT * FROM Trybeer.sales WHERE user_id=?', [userId]);

  return sales;
};

const createSale = async (reqBody) => {
  const { userId, price, address, num, status } = reqBody;

  const [sales] = await connection
    .execute(
      `INSERT INTO sales
      (user_id, total_price, delivery_address, delivery_number, sale_date, status)
      VALUES (?,?,?,?,NOW(),?)`,
      [userId, price, address, num, status],
    );

  return sales;
};

const getSaleById = async (saleId) => {
  const query = 'SELECT user_id, sale_id, sale_date, delivery_address, delivery_number,status, total_price, product_id, name, quantity, price, url_image FROM sales_products INNER JOIN (SELECT * FROM sales WHERE id=?) AS userOrders ON sales_products.sale_id = userOrders.id INNER JOIN products ON products.id = sales_products.product_id';
  
  const [sale] = await connection.execute(query, [saleId]);

  return sale;
}

module.exports = {
  createSale,
  getAll,
  getSalesByUserId,
  getSaleById
};
