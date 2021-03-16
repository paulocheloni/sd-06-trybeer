const connection = require('./connection');

const allProducts = async () => {
  const [products] = await connection.execute(
    'SELECT * FROM products',
  );
  return products.map(({ id, name, price, url_image }) => ({ id, name, price, url_image}) );
}

module.exports = {
  allProducts
}
