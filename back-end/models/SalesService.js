const connection = require('./connection');

const createOne = async (data) => {
  const { userId, price, address, number, status } = data;
  const { insertId } = await connection.execute(
    'INSERT INTO sales (user_id, total_price,'
       + 'delivery_address, delivery_number, sale_date, status) VALUES(?, ?, ?, ?, ?, ?)',
    [userId, price, address, number, Date.now(), status],
  );
  return insertId;
};

module.exports = {
  createOne,
};