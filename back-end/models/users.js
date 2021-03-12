const connection = require('./connection')

const coll = "users";

const getAll = async () => {
  const [users] = await connection.execute('SELECT * FROM Trybeer.users;');

  return users;
};

const getUser = async (email, password) => {
  const [user] = await connection.execute(
    `SELECT * FROM Trybeer.${coll} WHERE email = ? AND password = ?`, [email, password]
  )
}

module.exports = {
  getAll,
  getUser,
}
