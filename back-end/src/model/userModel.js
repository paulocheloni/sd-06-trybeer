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

module.exports = {
  getAll,
  getUserByEmail,
};
