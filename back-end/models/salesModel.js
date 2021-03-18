const connection = require('./connection');

const getAllSales = async () => {
  const [sales] = await connection.execute('SELECT * FROM Trybeer.sales');

  return sales;
};

const createSale = async (sale) => {
  const { userId, totalPrice, deliveryAddress, deliveryNumber } = sale;
  const newSale = await connection
    .execute(`INSERT INTO Trybeer.sales (user_id, total_price, 
      delivery_address, delivery_number, sale_date, status) VALUES (?, ?, ?, ?, NOW(), ?)`,
      [userId, totalPrice, deliveryAddress, deliveryNumber, 'pendente']);
  return newSale;
};

const createSaleProduct = async (product) => {
  const { saleId, productId, quantity } = product;
  const newProduct = await connection
    .execute('INSERT INTO Trybeer.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
      [saleId, productId, quantity]);
  return newProduct;
};

module.exports = {
  getAllSales,
  createSale,
  createSaleProduct,
};
