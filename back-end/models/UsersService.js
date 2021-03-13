const connection = require('./connection');

const getAll = async () => {
const [user] = await connection.execute(
'SELECT * FROM users;',
);
return user;
};

const getByEmail = async (email) => {
  const [user] = await connection.execute(
    'SELECT id, name, email, role FROM users WHERE email = ?', [email],
  );
  return user;
};

const getById = async (id) => {
  const [userId] = await connection.execute(
  'SELECT name, email, role FROM users WHERE id = ?', [id],
);
  return userId;
  };
  
const createOne = async (name, email, password, role) => {
  const { inserId } = await connection.execute(
    'INSERT INTO users (name, email, password, role) VALUES(?, ?, ?, ?)',
    [name, email, password, role],
  );
  return inserId;
};

module.exports = {
  getAll,
  getById,
  createOne,
  getByEmail,

};
