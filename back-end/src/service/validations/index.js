const userModel = require('../../model/userModel');

const BAD_REQUEST = 400;

const invalidEntries = {
  payload: { message: 'Invalid entries. Try again.' },
  status: BAD_REQUEST,
};

const loginValidation = async (email, userPass) => {
  const [result] = await userModel.getUserByEmail(email);
  if (result) {
    const { password } = result;

    if (password == userPass) return result;
  }
  return invalidEntries;
};

module.exports = {
  loginValidation,
};
