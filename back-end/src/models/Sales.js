const connection = require('./connection');

const getAll = async () => {
  const [sales] = await connection 
    .execute('SELECT * FROM sales');
  return sales;
};

const createSale = async (USER_ID, TOTAL_PRICE, DELIVERY_ADDRESS, DELIVERY_NUMBER) => {
  await connection
    .execute(`INSERT INTO sales
    (user_id, total_price, delivery_address, delivery_number, sale_date, status)
    VALUES (?, ?, ?, ?, SYSDATE(), ?)`,
    [USER_ID, TOTAL_PRICE, DELIVERY_ADDRESS, DELIVERY_NUMBER, 'Pendente']);
};

module.exports = { createSale, getAll };
