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

exports.createSaleProduct = async (saleProducts) => {
  console.log(saleProducts);

  return connection.execute("INSERT INTO sales (sale_id, product_id, quantity) VALUES (?, ?, ?)",
  saleProducts).then(([result]) => result);

  // const sql = "INSERT INTO sales (sale_id, product_id, quantity) VALUES ?";
  // return connection.query(sql, saleProducts);
};
