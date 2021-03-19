const connection = require('../connection/connection');

// Find All sales
const getAll = async () => {
  const [sales] = await connection.execute('SELECT * FROM Trybeer.sales');

  return sales;
};

// Store request
const storeRequest = async (userId, totalPrice, address, number) => {
  const [sales] = await connection
    .execute(
      `INSERT INTO Trybeer.sales
      (user_id, total_price, delivery_address, delivery_number, sale_date, status)
      VALUES (?, ?, ?, ?, NOW(), 'Pendente')`, [userId, totalPrice, address, number],
    );
  return sales;
};

module.exports = {
  getAll,
  storeRequest,
};