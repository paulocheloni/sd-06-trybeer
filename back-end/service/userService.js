const userModel = require('../model/userModel');

const UNPROCESSABLE_ENTITY = 422;

const getAllUsers = async () => userModel.getAllUsers();

const findUserByEmail = async (userEmail, password) => {
  const userFound = await userModel.findUserByEmail(userEmail);  

  if (!userFound || userFound.password !== password) {
    return {
      status: UNPROCESSABLE_ENTITY,
      message: 'Email or password not found',
      isError: true,
    }
  }
  // console.log(userFound);
  return userFound;
}

module.exports = {
  getAllUsers,
  findUserByEmail
}
