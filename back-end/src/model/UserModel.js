const connection = require('./connection');

// const getAllUsers = async () => {
//   const result = connection.execute(
//     'SELECT * FROM Trybeer.users',
//   );
  
//   return result;
// };

const getUserByEmail = async (email) => {
  const [result] = await connection.execute(
    'SELECT email, password, role FROM Trybeer.users WHERE email=?', [email],
  );
  
  return result;
};

const registerUser = async (name, email, password, role) => {
  const result = await connection.execute(
    'INSERT INTO Trybeer.users (name, email, password, role) VALUES (?,?,?,?)',
    [name, email, password, role],
  );
    
  return result;
};

module.exports = {
  // getAllUsers,
  getUserByEmail,
  registerUser,
};
