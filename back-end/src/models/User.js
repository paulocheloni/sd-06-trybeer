const connection = require('./connection');

const findByEmail = async (email) => {
  const email = await connection.execute(
    'SELECT email FROM users WHERE email = \'?\'', [email]
  );
  return email;
};

const createUser = async (name, email, password, role) => {
  const user = await connection.execute(
    'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)',
    [name, email, password, role]
  );
  return user[0].insertId;
};

module.exports = {
  createUser,
};
