const userModel = require('../model/userModel');

const getAllUsers = async () => userModel.getAllUsers();

const findUserByEmail = async (userEmail) => userModel.findUserByEmail(userEmail);

module.exports = {
  getAllUsers,
  findUserByEmail
}
