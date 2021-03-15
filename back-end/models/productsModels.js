const connection = require('./connection');

// Get all products
const getAll = async () => {
  const [products] = await connection.execute('SELECT * FROM products');
  return products;
};

module.exports = { getAll };
