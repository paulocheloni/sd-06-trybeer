const connection = require('./connection');

// const getAllUsers = async () => {
//   const result = connection.execute(
//     'SELECT * FROM Trybeer.users',
//   );
  
//   return result;
// };

const getUser = async (email) => {
  const [result] = await connection.execute(
    'SELECT email, password FROM Trybeer.users WHERE email=?', [email],
  );
  
  return result;
};

module.exports = {
  // getAllUsers,
  getUser,
};
