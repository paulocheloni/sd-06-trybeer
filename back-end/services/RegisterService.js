const status = require('../utils/allStatusCode');
const{ createRegister, getUserByEmail } = require('../models/RegisterModel');
const {
  validateEmail,
  validateName,
  validatePassword
} = require('../utils/funcValidations');
const { OK, BAD_REQUEST } = require('../utils/allStatusCode');
const { createToken } = require('../utils/createToken');

const RegisterValidation = async (body) => {
  const { name, email, password, role } = body;

  const [retorno] = await getUserByEmail(email);

  switch (false) {
    case validateEmail(email):
    case validatePassword(password):
    case validateName(name):
    case role:
      return { message: 'All fields must be filled', status: BAD_REQUEST };
    case retorno.length === 0:
      return { message: 'Email already registered', status: BAD_REQUEST };
    default: return null;
  } 
}

const RegisterServices = async (req, res) => {
  // const { name, email, password, salerOption } = req.body;
  const { body } = req;
  
  const error = await RegisterValidation(body);
  if (error) {
    const { message, status } = error;
    return res.status(status).json({ message });
  }

  const user = await createRegister(body);

  const { password: _password, ...userWithoutPassword } = user;
  const { id: _id, ...userWithoutId} = userWithoutPassword;
  const token = createToken(userWithoutPassword);

  res.status(OK).json({ ...userWithoutId, token });
};

module.exports = RegisterServices;
