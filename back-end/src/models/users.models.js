const connection = require('./connection');

const queryByEmail = async (email) => {
  const QUERY = 'SELECT * FROM users WHERE email = ?';
  const [[user]] = await connection.query(QUERY, [email]);
  return user;
};

module.exports = {
  queryByEmail,
};
