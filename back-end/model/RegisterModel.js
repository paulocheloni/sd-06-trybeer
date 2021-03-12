const connection = require('./connection');

const registerClient = async (name, email, password, role) => {
  connection.execute(
    'INSERT INTO Trybeer.users (name, email, password, role) VALUES (?,?,?,?)', [name, email, password, role]);
  return 
}

module.exports = {
  registerClient
};
