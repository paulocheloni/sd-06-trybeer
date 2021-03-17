const connection = require('./connection');

const getAll = async () => {
  const [users] = await connection.execute('SELECT * FROM users');
  return users;
};

const getEmail = async (emailLogin) => {
  const [result] = await connection.execute('SELECT * FROM users WHERE email=?', [emailLogin]);
  return result;
};

const registerUser = async ({ name, email, password, role }) => {
  const [responsePayload] = await connection
    .execute('INSERT INTO users(name, email, password, role) VALUES(?, ?, ?, ?)',
      [name, email, password, role]);
  return responsePayload;
};

const updateName = async (newUserName, email) => {
  const [updatedUser] = await connection
    .execute('UPDATE users SET name=? WHERE email=?', [newUserName, email])
  return updatedUser
}

module.exports = {
  getAll,
  getEmail,
  registerUser,
  updateName,
};
