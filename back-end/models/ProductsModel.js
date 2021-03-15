const connection = require('./connection');

const createProduct = async ({ name, price, url_image }) => {
  await connection.execute(
    'INSERT INTO products (name, price, url_image) VALUES (?, ?, ?)',
    [name, price, url_image],
  );
  return ({
    name,
    price,
    url_image,
  });
};

const getAll = async () => {
  const [products] = await connection.execute('SELECT * FROM products');
  return products;
};

module.exports = {
  createProduct,
  getAll,
};
