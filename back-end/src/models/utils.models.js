const connection = require('./connection');

const getAll = async (table) => {
  const QUERY = 'SELECT * FROM ??'
  const [results] = await connection.query(QUERY, [table]);
  console.table(results);
};

module.exports = {
  getAll,
}
