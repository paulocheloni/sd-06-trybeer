const connection = require('./connections');

const getAllProducts = async () => {
  try {
    return await connection
      .execute('SELECT * FROM products');
  } catch (e) {
    return null;
  }
};
const saleProducts = async (sale) => {
  console.log('MODELO', sale)
  const { user_id, total_price, delivery_address, delivery_number, sale_date, status } = sale;
  try {
    return await connection
      .execute('INSERT INTO sales (user_id, total_price, delivery_address,'
        + 'delivery_number, sale_date,status) VALUES (?,?,?,?,?,?)',
        [user_id, total_price, delivery_address, delivery_number, sale_date, status]);
  } catch (e) {
    return 'erro interno';
  }
}

module.exports = {
  getAllProducts,
  saleProducts
};
