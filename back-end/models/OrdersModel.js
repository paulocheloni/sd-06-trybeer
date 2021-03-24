const connection = require('./connection');

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

const alter = async ({ id, status }) => {
  await connection.execute(
    'UPDATE sales SET status = ? WHERE id = ?', [status, id],
  );
};

module.exports = {
  createOrder,
  getAll,
  getAllByUser,
  alter,
};