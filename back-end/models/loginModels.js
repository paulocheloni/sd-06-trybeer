const connection = require('./connection');

// Get all users
const getAll = async () => {
  const [users] = await connection.execute('SELECT * FROM users;');
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

module.exports = { getAll, create };