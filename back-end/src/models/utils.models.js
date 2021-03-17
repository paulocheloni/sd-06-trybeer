const connection = require('./connection');

const getAll = async (table) => {
  const QUERY = 'SELECT * FROM ??';
  const [results] = await connection.query(QUERY, [table]);
  return results;
};

const queryById = async (table, id) => {
  const QUERY = 'SELECT * FROM ?? WHERE id = ?';
  const [[result]] = await connection.query(QUERY, [table, id]);
  return result;
};

module.exports = {
  getAll,
  queryById,
};
