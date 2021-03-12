const connection = require('./connection');

const getAll = async () => {
const [user] = await connection.execute(
'SELECT * FROM users;',
);
return user;
};

const getById = async (id) => {
  const [userId] = await connection.execute(
  'SELECT name, email, role FROM users WHERE id = ?', [id],
);
  return userId;
  }; 

module.exports = {
  getAll,
  getById,
};
