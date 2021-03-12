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

// Delete a user
const exclude = async (id) => {
  await connection.execute('DELETE FROM users WHERE id = (?)', [id]);
};

// Find a user
const findByName = async (name) => {
  const [user] = await connection.execute(
    'SELECT * FROM users WHERE name = ?',
    [name],
  );
  return user;
};

module.exports = { getAll, create, exclude, findByName };
