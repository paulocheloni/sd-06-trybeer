const connection = require('./connection');

exports.create = async ({ userId, totalPrice, rua, numero, status }) =>
  connection
    .execute(
      `INSERT INTO sales
      (user_id, total_price, delivery_address, delivery_number, sale_date, status)
      VALUES (?, ?, ?, ?, SYSDATE(), ?)`,
      [
        userId,
        ++totalPrice,
        rua,
        numero,
        status,
      ],
    )
    .then(([result]) => ({ id: result.insertId }));
