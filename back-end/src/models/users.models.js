const connection = require('./connection');

const insertNewUser = async ({ name, email, password, role }) => {
  const QUERY = 'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)';
  const [{ insertId }] = await connection.query(QUERY, [name, email, password, role]);
  return insertId;
};

const updateNameByEmail = async (name, id) => {
  const QUERY = 'UPDATE users SET name = ? WHERE id = ?';
  return connection.query(QUERY, [name, id]);
};

module.exports = {
  insertNewUser,
  updateNameByEmail,
};
