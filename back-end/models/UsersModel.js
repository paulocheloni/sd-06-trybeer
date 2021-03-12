const connection = require('./connection');

const findByEmail = (email) => {
  try {
    const [user] = await connection.execute(
      'SELECT password FROM users WHERE email=?', [email]
    );
    return user;
  } catch (e) {
    throw ('error')
  }
};

const createUser = ({name, password, email, role}) => {
  try {
    await connection.execute(
      'INSERT INTO users name, password, email, role VALUES (?, ?, ?, ?)',
      [name, password, email, role],
    );
    return ({
      name,
      password,
      email,
      role,
    });
  } catch (e) {
    throw('error')
  }
}

module.exports = {
  findByEmail,
  createUser,
};
