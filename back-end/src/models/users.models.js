const connection = require('./connection');

const queryByEmail = async (email) => {
  const QUERY = 'SELECT * FROM users WHERE email = ?';
  const [[user]] = await connection.query(QUERY, [email]);
  return user;
};

const updateNameByEmail = async (name, email) => {
  const QUERY = 'UPDATE users SET name = ? WHERE email = ?';
  return await connection.execute(QUERY, [name, email]);
}

module.exports = {
  queryByEmail,
  updateNameByEmail,
};
