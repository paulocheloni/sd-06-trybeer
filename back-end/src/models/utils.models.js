const connection = require('./connection');

const getAll = async (table) => {
  const QUERY = 'SELECT * FROM ??';
  const [results] = await connection.query(QUERY, [table]);
  return results;
};

const getByFilter = async ({ table, filter, value }) => {
  try {
    const QUERY = 'SELECT * FROM ?? WHERE ?? = ?';
    const [results] = await connection.query(QUERY, [table, filter, value]);
    return results;
  } catch (err) {
    return [];
  }
};

module.exports = {
  getAll,
  getByFilter,
};
