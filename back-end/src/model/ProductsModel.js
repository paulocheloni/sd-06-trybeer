const connection = require('./connection');

const selectProducts = async () => {
 const [listProducts] = await connection.execute('SELECT * from Trybeer.products');
  return listProducts;
};

module.exports = { selectProducts };