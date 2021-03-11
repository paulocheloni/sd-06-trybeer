const { connection } = require('../Database/connection');

const loginUser = (email, password) => connection.query(
  'SELECT name, email, role FROM Trybeer.users WHERE email = ? AND password = ?', [email, password]
).then(result => result[0][0]);

module.exports = { loginUser };
