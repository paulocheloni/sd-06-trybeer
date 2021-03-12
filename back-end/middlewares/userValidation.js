const userService = require('../service/userService');

const BAD_REQUEST = 400;
const UNPROCESSABLE_ENTITY = 422;

const validateUserInputs = (req, res, next) => {
  const { email, password } = req.body;
  const isEmailValid = /[A-Za-z0-9]+@[A-Za-z]+[A-z]*(\.\w{2,3})+/.test(email);
  const isPasswordValid = password && password.length > 5;
  if (!email || !password || !isEmailValid || !isPasswordValid) {
    return res.status(BAD_REQUEST).json({ message: 'Invalid entried.' })
  }
  next();
}

const userExist = async (req, res, next) => {
  const { email, password } = req.body;
  const userFound = await userService.findUserByEmail(email);
  // console.log('password db', userFound);
  // console.log('password body', password);
  if (!userFound || userFound.password !== password) {
    return res.status(UNPROCESSABLE_ENTITY).json({ message: 'Email or password not found' })
  }
  next();
}

module.exports = {
  validateUserInputs,
  userExist
}
