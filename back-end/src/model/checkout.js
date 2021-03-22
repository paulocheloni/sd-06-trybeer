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
  let products = '';

  for (let products of saleProducts) {
    products = `${products} (
      ${saleProducts.saleId},
      ${saleProducts.productId},
      ${saleProducts.quantity}
    ),`
  };

  return connection
    .execute(`INSERT INTO sales (sale_id, product_id, quantity) VALUES
      ${products.substr(0, saleProducts.length - 1)}`)
      .then(([result]) => result)
};
