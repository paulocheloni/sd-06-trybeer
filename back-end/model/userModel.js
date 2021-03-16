const connection = require('./connection');

const getAllUsers = async () => {
  const [users] = await connection.execute(
    'SELECT * FROM Trybeer.users',
  );
  return users;
};

const findUserByEmail = async (userEmail) => {
  const [[user]] = await connection.execute(
    'SELECT * FROM Trybeer.users WHERE email=?', [userEmail],
  );
    return user;
};

const updateUserNameByEmail = async (userEmail, updatedName) => {
  await connection.execute(
    'UPDATE Trybeer.users SET Trybeer.users.name=? WHERE Trybeer.users.email=?', 
    [updatedName, userEmail],
  );
};

module.exports = {
  getAllUsers,
  findUserByEmail,
  updateUserNameByEmail,
};
