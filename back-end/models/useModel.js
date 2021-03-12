const connection = require('./connections');

const userLogin = async (userEmail, userPassword) => {
  const [[{ id, name, email, password, role }]] = await connection
    .execute('SELECT * FROM users WHERE email=? and password=?', [userEmail, userPassword]);
  return (id, name, email, password, role);
};

module.exports = {
  userLogin,
};