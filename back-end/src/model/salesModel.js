const connection = require('./connection');

const getAll = async () => {
  const [sales] = await connection.execute('SELECT * FROM Trybeer.sales');

  return sales;
};

const getSaleByUserId = async (reqBody) => {
  const { userId } = reqBody;
  const [sales] = await connection.execute('SELECT * FROM Trybeer.sales WHERE user_id=?', [userId]);

  return sales;
};

const createSale = async (reqBody) => {
  const { userId, price, address, num, date, status } = reqBody;

  const [sales] = await connection
    .execute(
      `INSERT INTO sales
      (user_id, total_price, delivery_address, delivery_number, sale_date, status)
      VALUES (?,?,?,?,?,?)`,
      [userId, price, address, num, date, status],
    );

  return sales;
};

module.exports = {
  createSale,
  getAll,
  getSaleByUserId,
};
