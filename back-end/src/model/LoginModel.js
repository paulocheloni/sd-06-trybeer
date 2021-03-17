const connection = require('./connection');

const isUserAdmin = async (email) => {
  const [result] = await connection.execute(
    'SELECT role FROM Trybeer.users WHERE email=?', [email],
  );

  return result;
};

module.exports = {
  isUserAdmin,
  // userRole,
};
