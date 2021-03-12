const Login = require('../models/Login');
const createToken = require('../auth/createToken');

const SUCESS = 200;
const UNAUTH = 401;
const message = 'erro no login ou senha!'

const loginUsers = async (email, password) => {
  const user = await Login.findByEmail(email);

  if(!user[0] || user[0].password !== password) return { status: UNAUTH, message };

  const {
     password: passwordDB, id, ...userWithoutPassword 
  } = user[0];

  const token = createToken(userWithoutPassword);

  return { status: SUCESS, message: { token, ...userWithoutPassword } };
};

module.exports = loginUsers;
