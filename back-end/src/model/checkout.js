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
  for (let index = 0; index >= saleProducts.length; index++) {
    const { saleId, productId, quantity } = saleProducts[index];

    connection
      .execute(
        `INSERT INTO sales
        (sale_id, product_id, quantity)
        VALUES (?, ?, ?)`,
        [
          saleId,
          productId,
          quantity,
        ],
      )
      .then(([result]) => result);
  }
};
