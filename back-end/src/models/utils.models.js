const connection = require('./connection');

const getAll = async (table) => {
  const QUERY = 'SELECT * FROM ??';
  const [results] = await connection.query(QUERY, [table]);
  return results;
};

module.exports = {
  getAll,
};
