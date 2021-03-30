const connection = require('./connection');

exports.getAll = async () => (
  connection.execute('SELECT * FROM products;').then(([products]) => products)
);

exports.getByName = async (name) => (
  connection
    .execute('SELECT * FROM products WHERE name = ?', [name])
    .then(([[product]]) => product || null)
);

exports.create = async (name, price, url_image) => (
  connection
    .execute('INSERT INTO products (name, price, url_image) VALUES (?, ?, ?)',
    [
      name,
      price,
      url_image,
    ])
    .then(([result]) => ({ id: result.insertId }))
);
