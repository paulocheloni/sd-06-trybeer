const connection = require('./connection');

const getAll = async () => {
  // try {
  //   const [ users ] = await connection.execute('SELECT * FROM Trybeer.user');

  //   return users;
  // } catch(err) {
  //   console.log(err)
  //   return err;
  // } 

  const [users] = await connection.execute('SELECT * FROM Trybeer.users');

  return users;
};

const getUserByEmail = async (email) => {
  const [users] = await connection.execute('SELECT * FROM Trybeer.users WHERE email=?', [email]);

  return users;
};

const createUser = async (name, email, userPass, role) => {
  const [{ insertId }] = await connection
    .execute('INSERT INTO users (name, email, password, role) VALUES (?,?,?,?)',
      [name, email, userPass, role]);

  return {
    id: insertId,
    name,
    email,
    password: userPass,
    role,
  };
};

const updateUser = async (name, email) => {
  await connection.execute('UPDATE users SET name=? WHERE email=?', [name, email]);

  return {
    name,
  };
};

module.exports = {
  getAll,
  getUserByEmail,
  createUser,
  updateUser,
};
