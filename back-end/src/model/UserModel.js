const connection = require('./connection');

const getUserByEmail = async (email) => {
  const [result] = await connection.execute(
    'SELECT email, password, role FROM Trybeer.users WHERE email=?', [email],
  );
  
  return result;
};

const registerUser = async (name, email, password, role) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO Trybeer.users (name, email, password, role) VALUES (?,?,?,?)',
    [name, email, password, role],
  );

  return {
    id: insertId,
    name,
    email,
    role,
  };
};

const updateUser = async (name, email) => {
 const up = await connection.execute(
    'UPDATE Trybeer.users SET name=? WHERE email=?', [name, email],
  );
  return up;
};

module.exports = {
  // getAllUsers,
  getUserByEmail,
  registerUser,
  updateUser,
};
