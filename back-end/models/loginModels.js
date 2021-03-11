const connection = require('./connection');

// Get all users
const getAll = async () => {
  const [users] = await connection.execute('SELECT * FROM Trybeer.users');
  return users;
};

// Create a user
const create = async (name, email, password, role) => {
  const [users] = await connection.execute(
    'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)',
    [name, email, password, role],
  );
  return users;
};

const validateLogin = async (email, password) => {
  const [user] = await connection.execute(
    'SELECT * FROM Trybeer.users WHERE email = ? AND password = ?', [email, password],
  );
    return user;
};

module.exports = { getAll, create, validateLogin };
