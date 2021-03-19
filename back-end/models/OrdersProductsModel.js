const connection = require('./connection');

// const findByEmail = async (email) => {
//   const [user] = await connection.execute(
//     'SELECT * FROM users WHERE email=?', [email],
//   );
//   return user;
// };

const createOrderProduct = async ({saleId, item}) => {
  const { id, quantity } = item;
  await connection.execute(
    'INSERT INTO sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
    [saleId ,id, quantity],
  );
};

const getAll = async () => {
  const [orders] = await connection.execute('SELECT * FROM sales');
  return orders;
};

// const update = async (name, email) => {
//   await connection.execute(
//     'UPDATE users SET name = ?, klaklsk WHERE email = ?',
//     [name, email],
//   );
// };

module.exports = {
  createOrderProduct,
  getAll,
};