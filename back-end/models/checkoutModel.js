const connection = require('./connections');

const checkOrders = async (sale) => {
  const { user_id, total_price, delivery_address, delivery_number, sale_date, status } = sale;
  const [{ insertId }] = await connection
    .execute('INSERT INTO sales (user_id,total_price ,'
      + 'delivery_address ,delivery_number , sale_date , status) VALUES(?,?,?,?,?,?)',
      [user_id, total_price, delivery_address, delivery_number, sale_date, status]);
  return insertId;
  //pinserir e pegar o id.
};
const insertSaleProducts = async (id, product_id, quantity) => {
  return await connection
    .execute('INSERT INTO sales_products (sale_id, product_id, quantity) VALUES(?,?,?)',
      [id, product_id, quantity]);
}
module.exports = { checkOrders, insertSaleProducts };