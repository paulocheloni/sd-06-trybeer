const config = require('../models/connections');

const userLogin = async (useeEmail, userPassword) => {
  const [[{ id, name, email, password, role }]] = await config.execute('SELECT * FROM Trybeer.users WHERE email=? && password=?', [useeEmail, userPassword]);
  return (id, name, email, password, role)
};

module.exports = {
  userLogin,
};