const connection = require('./connections');

const userLogin = async (userEmail, userPassword) => {
  try {
    const [[{ id, name, email, password, role }]] = await connection
      .execute('SELECT * FROM users WHERE email=? and password=?', [userEmail, userPassword]);
    return (id, name, email, password, role);
  } catch (e) {
    return null;
  }
};

const userRegister = async (user) => {
  const { name, email, password, role } = user;
  try {
    await connection
      .execute('INSERT INTO users (name, email, password, role) VALUES (?,?,?,?)',
        [name, email, password, role]);
    return user;
  } catch (e) {
    return e.message;
  }
};

module.exports = {
  userLogin,
  userRegister,
};