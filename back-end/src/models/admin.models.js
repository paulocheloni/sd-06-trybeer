const connection = require('./connection');

const querySaleById = async (id) => {
  try {
    const QUERY_CMD = 'SELECT *, ';
    const SUB_QUERY = '(SELECT name FROM users AS a WHERE a.id = s.user_id) AS user_name ';
    const QUERY_TABLE = 'FROM sales AS s ';
    const QUERY_FILTER = 'WHERE id = ?;';
    const QUERY = QUERY_CMD + SUB_QUERY + QUERY_TABLE + QUERY_FILTER;
    const [results] = await connection.query(QUERY, [id]);
    return results;
  } catch (err) {
    return {};
  }
};

const updateSaleStatus = async (status, id) => {
  const QUERY = 'UPDATE sales SET status = ? WHERE id = ?';
  await connection.query(QUERY, [status, id]);
};

module.exports = {
  querySaleById,
  updateSaleStatus,
};
