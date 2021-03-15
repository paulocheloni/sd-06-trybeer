// const Err = require('../error/Err');
const userModel = require('../models/UsersModel');

const createUserService = async ({ name, password, email, role }) => userModel
  .createUser({ name, password, email, role });

const getAll = async () => userModel.getAll();

const findByEmail = async (email) => userModel.findByEmail(email);

module.exports = {
  createUserService,
  getAll,
  findByEmail,
};
