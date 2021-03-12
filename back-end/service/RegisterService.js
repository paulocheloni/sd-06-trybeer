const { RegisterModel } = require('../model');

<<<<<<< HEAD
const registerClient = async (name, email, password, role) => RegisterModel
  .registerClient(name, email, password, role);
=======
const registerClient = async (name, email, password, role) => {
  await RegisterModel.registerClient(name, email, password, role);
};
>>>>>>> 468822f989bfd87c8ddf88efe193803e958bbbd8

module.exports = {
  registerClient,
};
