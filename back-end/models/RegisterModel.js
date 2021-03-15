const connection = require('../database/connection');

const createRegister = async (body) => {
  const { name, email, password, role } = body;
  const [user] = await connection.execute(
    'INSERT INTO users (name, email, password, role) VALUES (?,?,?,?)',
    [name, email, password, role]
  );
  console.log(user);
  return user;
}

module.exports = { createRegister };