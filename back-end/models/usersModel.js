const connection = require('./connection');

const getAllUsers = async () => {
  const [users] = await connection.execute('SELECT * FROM Trybeer.users');

  return users;
};

const findUserByEmail = async (email) => {
  const [[
    userFound,
  ]] = await connection.execute('SELECT * FROM Trybeer.users WHERE email = ?', [email]);
  if (userFound) {
    return userFound;
  }
  return false;
};

module.exports = {
  getAllUsers,
  findUserByEmail,
};
