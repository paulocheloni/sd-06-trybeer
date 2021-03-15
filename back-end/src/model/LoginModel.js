const connection = require('./connection');

const userRole = async (email) => {
  const [result] = await connection.execute(
    'SELECT email FROM Trybeer.users WHERE email=?', [email],
  );

  return result;
};

module.exports = {
  userRole,
}