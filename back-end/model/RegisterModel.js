const connection = require('./connection');

const registerClient = async (name, email, password, role) => {
  return await connection.execute(
    'INSERT INTO Trybeer.users (name, email, password, role) VALUES (?,?,?,?)',
    [name, email, password, role],
  );
};

module.exports = {
  registerClient,
};
