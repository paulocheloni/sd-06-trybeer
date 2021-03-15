const { UserModel } = require('../model');

const registerUser = async (name, email, password, role) => UserModel
  .registerUser(name, email, password, role);

  module.exports = {
    registerUser,
  };