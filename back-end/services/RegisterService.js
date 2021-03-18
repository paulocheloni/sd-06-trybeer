const { createRegister, getUserByEmail } = require('../models/RegisterModel');
const {
  validateEmail,
  validateName,
  validatePassword,
} = require('../utils/funcValidations');
const { OK, BAD_REQUEST } = require('../utils/allStatusCode');
const { createToken } = require('../utils/createToken');

const objErr = (err, status) => ({ err, status });

const RegisterValidation = (body) => {
  const { name, email, password, role } = body;

  // console.log('body', body); // Retirar
  switch (false) {
    case validateEmail(email):
    case validatePassword(password):
    case validateName(name):
    case role:
      return objErr('All fields must be filled', BAD_REQUEST);
    default: return null;
  } 
};

const emailIsExists = async (email) => {
  const [retorno] = await getUserByEmail(email);
  if (retorno.length !== 0) return objErr('E-mail already in database.', BAD_REQUEST);
  return null;
};

const RegisterServices = async (req, res) => {
  const { body } = req;
  
  const error = RegisterValidation(body);
  console.log('error', error)
  if (error) return res.status(error.status).json({ err: error.err });
  // console.log('status', status)
  // console.log('ok', OK)
  // console.log('err', err)
  console.log('chegou !!!')
  
  const error2 = await emailIsExists(body.email);
  if (error2) return res.status(error2.status).json({ err: error2.err });

  const user = await createRegister(body);

  const { password, name, ...userWithoutPassword } = user;
  const { id, password: _password, ...userWithoutId } = user;
  const token = createToken(userWithoutPassword);

  res.status(OK).json({ ...userWithoutId, token });
};

module.exports = RegisterServices;
