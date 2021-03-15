const connection = require('./connection');
const mysql = require('mysql2');

const getAll = async ({ sort = 'name', page = 1, limit = 2, q = '' }) => {
  const offset = (page - 1) * limit;
  const ordenation = sort[0] === '-' ? 'DESC' : 'ASC';

  const sortColumn = (sort[0] === '-') ? sort.substring(1) : sort; 

  let query;

  if (q !== '') {
    query = 'SELECT * FROM Trybeer.products WHERE name LIKE ' +
      mysql.escape('%' + q + '%') + ' ORDER BY ' + sortColumn + ' ' + ordenation + ' LIMIT ' + mysql.escape(limit) + ' OFFSET ' + mysql.escape(offset);
  } else {
    query = 'SELECT * FROM Trybeer.products ORDER BY ' + sortColumn + ' '
      + ordenation + ' LIMIT ' + mysql.escape(limit) + ' OFFSET ' +
      mysql.escape(offset);
  }

  console.log(query)

  const [products] = await connection.execute(query);

  const [productsNumber] = await connection.execute('SELECT COUNT(*) as count FROM Trybeer.products');

  const rows = products.map((product) => {
    const { name, id, price, url_image: photo } = product;
    return ({ id, name, price, photo });
  });

  const count = productsNumber[0].count;

  return ({ rows, count });
};

module.exports = {
  getAll,
};
