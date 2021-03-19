const connection = require('./connection');

const getOne = async (saleId) => {
  const [sale] = await connection.execute(
    'SELECT (s.id as id, s.total_price as saleTotal, , '
    + 'p.price as productPrice, sD.quantity as productQuantity,'
     + 'p.name as productName, s.sale_date as saleDate ) '
     + 'FROM sale_products as sD  INNER JOIN sales as s ON salesDetails.id = s.id'
     + 'INNER JOIN products as p ON saleDetails.product_id = p.product_id'
     + 'WHERE s.id = ?', [saleId],

  );

  return sale;
};

const createOne = async (SaleId, quantity, ProductId) => {
  const [saleDetails] = await connection.execute(
    'INSERT INTO sale_products (sale_id, product_id, quantity) VALUES (?, ?, ?);',
    [SaleId, quantity, ProductId],
  );
  return saleDetails;
};

module.exports = {
  getOne, createOne,
};