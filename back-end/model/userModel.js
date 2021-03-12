const connection = require('./connection');

const getUsers = (userData) => {
  const { id, name, email, password, role } = userData;

  return {
    id,
    name,
    email,
    password,
    role
  }
}

const getAllUsers = async () => {
  const [users] = await connection.execute(
    'SELECT * FROM Trybeer.users'
  )
  return users;
}

const findUserByEmail = async (userEmail) => {
  const [[user]] = await connection.execute(
    'SELECT * FROM Trybeer.users WHERE email=?', [userEmail]
  );
    return user;
}

module.exports = {
  getAllUsers,
  findUserByEmail
}
