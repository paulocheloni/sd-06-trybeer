const connection = require('./connection');

const addSale = async (userId, total, street, number, data, status) => {
  const response = await connection.execute(
    'INSERT INTO sales (user_id, total_price, delivery_address, delivery_number, sale_date, status) VALUES (?, ?, ?, ?, ?, ?)', [userId, total, street, number, data, status],
  );
  return response[0].insertId;
}

module.exports = {
  addSale,
};
