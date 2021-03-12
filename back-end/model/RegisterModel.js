const connection = require('./connection');

const registerClient = async (name, email, password, role) => {
  const result = await connection.execute(
    'INSERT INTO Trybeer.users (name, email, password, role) VALUES (?,?,?,?)',
    [name, email, password, role],
  );
    
  return result;
};

module.exports = {
  registerClient,
};
