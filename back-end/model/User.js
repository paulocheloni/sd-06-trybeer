// const { ObjectId } = require('mongodb');
const connection = require('../connection/connection');

// Find All Users
const getAll = async () => {
  const [ users ] = await connection.execute('SELECT * FROM Trybeer.users');

  return users;
}

module.exports = {
  getAll,
};
