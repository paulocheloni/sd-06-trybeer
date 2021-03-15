const connection = require('./connection');

const getAll = async () => {
  const [users] = await connection.execute('SELECT * FROM users');
  return users;
};

const getEmail = async (emailLogin) => {
  const [result] = await connection.execute('SELECT * FROM users WHERE email=?', [emailLogin]);
  return result;
};

module.exports = {
  getAll,
  getEmail,
};
