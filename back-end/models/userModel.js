const connection = require('./connection');

const findUserByEmail = async (email) => {
  const [[user]] = await connection.execute(
    'SELECT * FROM users WHERE email=?', [email],
  );
  return user;
};

const createUser = async (name, email, password, role) => {
  console.log('cheguei antes')
  await connection.execute(
    'INSERT INTO users (name, email, password, role) VALUES (?,?,?,?)',
    [name, email, password, role],
  );
  console.log('cheguei dps')
};

module.exports = {
  findUserByEmail,
  createUser,
};
