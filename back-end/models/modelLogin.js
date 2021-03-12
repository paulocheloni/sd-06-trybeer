const connection = require('./connection');

const findUserByEmail = async (email) => {
  const [[user]] = await connection.execute(
    'SELECT * FROM users WHERE email=?', [email]
  );
  return user;
};

module.exports = {
  findUserByEmail,
};
