const connection = require('./connection');

// const findByEmail = async (email) => {
//   const [user] = await connection.execute(
//     'SELECT * FROM users WHERE email=?', [email],
//   );
//   return user;
// };

// const getByDateAndId = async (date, id) => {
//   const [orderId] = await connection.execute(
//     'SELECT id FROM sales WHERE sale_date=? AND user_id=?', [date, id],
//   );
//   return orderId;
// };

const columns = 'user_id, total_price, delivery_address, delivery_number, sale_date, status';
const createOrder = async ({
  userId,
  totalPrice,
  deliveryAddress,
  deliveryNumber,
  status,
}) => {
  const [{ insertId }] = await connection.execute(
    `INSERT INTO sales (${columns}) VALUES (?, ?, ?, ?, now(), ?)`,
    [userId, totalPrice, deliveryAddress, deliveryNumber, status],
  );
  // console.log('saleId', insertId);
  // const [{ id }] = await getByDateAndId(saleDate, userId);
  return ({
    id: insertId, totalPrice, deliveryAddress, deliveryNumber, status,
  });
};

const getAll = async () => {
  const [orders] = await connection.execute(
    'SELECT *, CONVERT_TZ(sale_date, "+00:00", "-03:00") as `date_time` FROM sales',
  );
  return orders;
};

const getAllByUser = async (id) => {
  const [orders] = await connection.execute(
    'SELECT *, CONVERT_TZ (sale_date, "+00:00", "-03:00")as `date_time` FROM sales WHERE user_id=?',
    [id],
  );
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
  getAllByUser,
};