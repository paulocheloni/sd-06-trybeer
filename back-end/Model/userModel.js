const { connection } = require('../Database/connection');

const loginUser = (email, password) => connection.query(
  'SELECT name, email, role FROM Trybeer.users WHERE email = ? AND password = ?',
  [email, password],
).then((result) => result[0][0]);

const findUserByEmail = (email) => connection.query(
  'SELECT email FROM Trybeer.users WHERE email = ?',
  [email],
).then((result) => result[0][0]);

const registerNewUser = (name, email, password, role) => connection.query(
  'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)',
  [name, email, password, role],
);

module.exports = {
  loginUser,
  findUserByEmail,
  registerNewUser,
};
