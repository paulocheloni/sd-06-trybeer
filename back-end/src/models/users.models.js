const connection = require('./connection');

const queryByEmail = async (email) => {
  const QUERY = 'SELECT * FROM users WHERE email = ?';
  const [results] = await connection.query(QUERY, [email]);
  console.table(results);
};

module.exports = {
  queryByEmail,
};
