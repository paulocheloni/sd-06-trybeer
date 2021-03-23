const connection = require('./connection');

// Get all orders
const getAll = async () => {
  const [orders] = await connection.execute('SELECT * FROM sales');
  return orders;
};

const create = async ({ priceTotal, date, userID, address, number }) => {
  try {
    await connection.execute(
      `INSERT INTO sales
        (total_price, sale_date, user_id, delivery_address, delivery_number, status)
        VALUES (?, ?, ?, ?, ?, ?)`,
      [priceTotal, date, userID, address, number, 'Pendente'],
    );
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  create,
  getAll,
};
