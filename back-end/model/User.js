// const { ObjectId } = require('mongodb');
const connection = require('../connection/connection');

// Find All Users
const getAll = async () => {
  const [users] = await connection.execute('SELECT * FROM Trybeer.users');

  return users;
};

// VerifyUser
const verifyUser = async (email, password) => {
  const [users] = await connection
    .execute('SELECT * FROM Trybeer.users WHERE email = ? AND password = ?', [email, password]);

  return users;
};

module.exports = {
  getAll,
  verifyUser,
};
