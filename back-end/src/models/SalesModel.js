const connection = require('./connection');

const getSaleById = async (saleId) => {
  const [sale] = await connection.execute('SELECT * FROM Trybeer.sales WHERE id=?', [saleId])
  return sale;
};

const getSaleProducts = async (saleId) => {
  const query = `
  SELECT sp.product_id, sp.quantity, p.name, p.price
  FROM Trybeer.sales_products AS sp
  JOIN Trybeer.products AS p
  ON p.id = sp.product_id WHERE sp.sale_id = ?`
  const [saleProducts] = await connection.execute(`${query}`, [saleId])
  return saleProducts;
}

module.exports = {
  getSaleById,
  getSaleProducts
}