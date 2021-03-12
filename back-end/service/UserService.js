const userModel = require('../model/User');

// Return all Users
const getAll = async () => {
  const users = await userModel.getAll();
  return users;
};

// Add new Users
const createNewUser = async (name, email, password, role) => {
  const user = await userModel.createUser(name, email, password, role);
  return user;
};

// // Verify user by email and password
const verifyUser = async (email, password) => {
  const user = await userModel.verifyUser(email, password);
  return user;
};

// // Update Users
// const update = async (id, name, quantity) => {
//   const validationMessage = await validateuserModel('update', name, quantity);
//   if (validationMessage === 'OK' && validateId(id)) {
//     const result = await userModel.update(id, name, quantity);
//     return { status: 'OK', result };
//   }
//   return { status: 'NOK', result: validationMessage };
// };

module.exports = {
  getAll,
  createNewUser,
  verifyUser,
  // update,
};
