const connection = require('./connection');

const validateLogin = async (email, password) => {
  const [user] = await connection.execute(
    'SELECT * FROM users WHERE email = ? AND password = ?', [email, password],
  );
  return user;
};

module.exports = { validateLogin };
