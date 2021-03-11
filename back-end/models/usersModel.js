const connection = require('./connection');

const getAllUsers = async () => {
  const [users] = await connection.execute('SELECT * FROM Trybeer.users');

  return users;
};

const findUserByEmail = async (email) => {
  const [[
    userFound,
  ]] = await connection.execute('SELECT * FROM Trybeer.users WHERE email = ?', [email]);

  return userFound;
};

module.exports = {
  getAllUsers,
  findUserByEmail,
};
