const connection = require('./connections');

const checkOrders = async (sale) => {
  const { userId, totalPrice, deliveryAddress, deliveryNumber, saleDate, status } = sale;
  const [{ insertId }] = await connection
    .execute('INSERT INTO sales (user_id,total_price ,'
      + 'delivery_address ,delivery_number , sale_date , status) VALUES(?,?,?,?,?,?)',
      [userId, totalPrice, deliveryAddress, deliveryNumber, saleDate, status]);
  return insertId;
  // pinserir e pegar o id.
};
const insertSaleProducts = async (id, productId, quantity) => connection
    .execute('INSERT INTO sales_products (sale_id, product_id, quantity) VALUES(?,?,?)',
      [id, productId, quantity]);
module.exports = { checkOrders, insertSaleProducts };