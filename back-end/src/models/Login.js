const connection = require('./connection');

const getAllUser = async () => {
  const [alunos] = await connection.execute('SELECT * FROM trybeer.users');
  return alunos;
};

module.exports = {
  getAllUser,
};
