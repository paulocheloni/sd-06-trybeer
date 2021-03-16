const connection = require('./connection');

const queryByEmail = async (email) => {
  const QUERY = 'SELECT * FROM users WHERE email = ?';
  const [[user]] = await connection.query(QUERY, [email]);
  return user;
};

const insertNewUser = async ({ name, email, password, role }) => {
  const QUERY = 'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)';
  const [{ insertId }] = await connection.query(QUERY, [name, email, password, role]);
  return insertId;
};

const updateNameByEmail = async (name, id) => {
  const QUERY = 'UPDATE users SET name = ? WHERE id = ?';
  return await connection.execute(QUERY, [name, id]);
};

module.exports = {
  queryByEmail,
  insertNewUser,
  updateNameByEmail
};
