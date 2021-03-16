const connection = require('./connection');

const getAll = async (table) => {
  const QUERY = 'SELECT * FROM ??';
  const [results] = await connection.query(QUERY, [table]);
  return results;
};

const getByFilter = async (table, column, value) => {
  const QUERY = 'SELECT * FROM ?? WHERE ?? = ?';
  const [results] = await connection.query(QUERY, [table, column, value]);
  return results;
};

module.exports = {
  getAll,
  getByFilter,
};
