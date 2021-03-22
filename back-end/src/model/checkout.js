const connection = require('./connection');

exports.create = async ({ userId, totalPrice, rua, numero, status }) => {
  console.log(userId, typeof ++totalPrice, rua, numero, status);

  return connection
    .execute(
      `INSERT INTO sales
      (user_id, total_price, delivery_address, delivery_number, sale_date, status)
      VALUES (?, ?, ?, ?, ?, ?)`,
      [
        userId,
        ++totalPrice,
        rua,
        numero,
        SYSDATE(),
        status,
      ],
    )
    .then(([result]) => result || null);
}
