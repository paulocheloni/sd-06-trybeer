const status = require('../utils/allStatusCode');
const{ createRegister } = require('../models/RegisterModel');
const {
  validateEmail,
  validateName,
  validatePassword
} = require('../utils/funcValidations');
const { OK, BAD_REQUEST } = require('../utils/allStatusCode');

const RegisterValidation = (body) => {
  const { name, email, password, role } = body;
  switch (false) {
    case validateEmail(email):
    case validatePassword(password):
    case validateName(name):
    case !role:
      return { message: 'All fields must be filled', status: BAD_REQUEST };
    default: return null;
  } 
}

const RegisterServices = async (req, res) => {
  // const { name, email, password, salerOption } = req.body;
  const { body } = res;
  console.log('body', body)
  const error = RegisterValidation(body);
  if (error) {
    const { message, status } = error;
    return res.status(status).json(objMessageError(message));
  }

  const user = await createRegister(body);

  res.status(OK).json(objMessageError(user));
};

module.exports = RegisterServices;