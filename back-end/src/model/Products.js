const connection = require('./connection');

exports.getAll = async () => (
  connection.execute('SELECT * FROM products;').then(([products]) => products)
);

exports.getByName = async (name) => (
  connection
    .execute('SELECT * FROM products WHERE name = ?', [name])
    .then(([[product]]) => product || null)
);
