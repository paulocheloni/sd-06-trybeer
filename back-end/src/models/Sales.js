const connection = require('./connection');

const createSale = async (user_id, total_price, delivery_address, delivery_number) => {
  await connection
    .execute(`INSERT INTO sales
    (user_id, total_price, delivery_address, delivery_number, sale_date, status)
    VALUES (?, ?, ?, ?, SYSDATE(), ?)`,
    [user_id, total_price, delivery_address, delivery_number, "Pendente"]);
};

module.exports = { createSale }