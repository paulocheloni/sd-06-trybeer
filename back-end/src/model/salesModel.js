const connection = require('./connection');

const getAll = async () => {
  const [sales] = await connection.execute('SELECT * FROM Trybeer.sales');

  return sales;
};

const getSalesByUserId = async (userId) => {
  const [sales] = await connection.execute('SELECT * FROM Trybeer.sales WHERE user_id=?', [userId]);

  return sales;
};

const createSale = async (reqBody) => {
  const { userId, price, address, num, status } = reqBody;

  const [sales] = await connection
    .execute(
      `INSERT INTO sales
      (user_id, total_price, delivery_address, delivery_number, sale_date, status)
      VALUES (?,?,?,?,NOW(),?)`,
      [userId, price, address, num, status],
    );

  return sales;
};

module.exports = {
  createSale,
  getAll,
  getSalesByUserId,
};
