const connection = require('./connection');

// const findByEmail = async (email) => {
//   const [user] = await connection.execute(
//     'SELECT * FROM users WHERE email=?', [email],
//   );
//   return user;
// };

const getByDateAndId = async (date, id) => {
  const [orderId] = await connection.execute(
    'SELECT id FROM sales WHERE sale_date=? AND user_id=?', [date, id],
  );
  return orderId;
};
const columns = 'user_id, total_price, delivery_address, delivery_number, sale_date, status';
const createOrder = async ({
  userId,
  totalPrice,
  deliveryAddress,
  deliveryNumber,
  saleDate,
  status,
}) => {
  await connection.execute(
    `INSERT INTO sales (${columns}) VALUES (?, ?, ?, ?, ?, ?)`,
    [userId, totalPrice, deliveryAddress, deliveryNumber, saleDate, status],
  );
  const [{ id }] = await getByDateAndId(saleDate, userId);
  return ({
    id, totalPrice, deliveryAddress, deliveryNumber, saleDate, status,
  });
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
  createOrder,
  getAll,
};