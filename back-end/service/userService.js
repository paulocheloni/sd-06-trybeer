const userModel = require('../model/userModel');

const UNPROCESSABLE_ENTITY = 422;

const findUserByEmail = async (userEmail, password) => {
  const userFound = await userModel.findUserByEmail(userEmail);  

  if (!userFound || userFound.password !== password) {
    return {
      status: UNPROCESSABLE_ENTITY,
      message: 'Email or password not found',
      isError: true,
    };
  }
  return userFound;
};

const updateUserNameByEmail = async (userEmail, updatedName) => {
  await userModel.updateUserNameByEmail(userEmail, updatedName);
};

const createUser = async (name, email, password, role) => {
  const userFound = await userModel.findUserByEmail(email);  
  if (userFound) {
    return {
      status: UNPROCESSABLE_ENTITY,
      message: 'Email alredy exists ',
      isError: true,
    };
  }
  await userModel.createUser(name, email, password, role);
};

module.exports = {
  findUserByEmail,
  updateUserNameByEmail,
  createUser,
};
