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
const findByEmail = async (email) => {
  const [user] = await connection.execute(
    'SELECT * FROM users WHERE email = ?',
    [email],
  );
  return user;
};

// Edit a user
const edit = async (nextName, prevName) => {
  const [user] = await connection.execute(
    'UPDATE users SET name = ? WHERE name = ?',
    [nextName, prevName],
  );
  return user;
};

module.exports = { getAll, create, exclude, findByEmail, edit };
