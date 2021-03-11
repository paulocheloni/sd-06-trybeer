const connection = require('./connection');

const getAll = async () => {
  const [ users ] = await connection.execute('SELECT * FROM Trybeer.users');

  return users;
}

module.exports = {
  getAll,
}