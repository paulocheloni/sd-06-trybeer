const jwt = require('jsonwebtoken');
const userModel = require('../../model/userModel');

const UNAUTHORIZED = 401;
const BAD_REQUEST = 400;

const wrongTokenInfo = {
  payload: { message: 'Authorization token is not valid.' },
  status: UNAUTHORIZED,
};

const invalidEntries = {
  payload: { message: 'Invalid entries. Try again.' },
  status: BAD_REQUEST,
};

const userAlredyRegistered = {
  payload: { message: 'A user with this email already exists.' },
  status: BAD_REQUEST,
};

const loginValidation = async (email, userPass) => {
  if (!email) return invalidEntries;

  const [result] = await userModel.getUserByEmail(email);
  if (result) {
    const { password } = result;

    if (password === userPass) return result;
  }
  return invalidEntries;
};

const newUserValidation = async (email) => {
  if (!email) return userAlredyRegistered;

  const [result] = await userModel.getUserByEmail(email);
  if (!result) return true;

  return userAlredyRegistered;
};

const tokenValidation = (token) => {
  const secret = 'secretToken';
  if (!token) return wrongTokenInfo;
  
  const validationResult = jwt.decode(token, secret);
  console.log(validationResult);
  if (validationResult) return true;
  return wrongTokenInfo;
};

module.exports = {
  loginValidation,
  newUserValidation,
  tokenValidation,
};
