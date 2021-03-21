const connection = require('./connection');

const getAll = async () => {
  const [sales] = await connection.execute(
  'SELECT * FROM sales;',
  );
  return sales;
};

// const createProduct = async (sales) => {
//   const { id, userId, totalPrice, deliveryAdress, deliveryNumber, saleDate, status } = sales;
//   const { insertId } = await connection.execute(
//     'INSERT INTO sales '
//     + '(id, user_id, total_price, delivery_adress, delivery_number, sale_date, status ) '
//     + 'VALUES(?, ?, ?, ?, ?, ?, ?)',
//     [id, userId, totalPrice, deliveryAdress, deliveryNumber, saleDate, status],
//   );
//   return insertId;
// };

module.exports = {
  getAll, create
};
