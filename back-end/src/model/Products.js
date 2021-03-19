const connection = require('./connection');

exports.getAll = async () => (
  connection.execute('SELECT * FROM products;').then(([products]) => products)
);