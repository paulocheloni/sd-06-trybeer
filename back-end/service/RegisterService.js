const { RegisterModel } = require('../model');

const registerClient = async (name, email, password, role) => RegisterModel
  .registerClient(name, email, password, role);

module.exports = {
  registerClient,
};
