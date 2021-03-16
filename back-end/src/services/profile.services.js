const { users } = require('../models');

const updateName = async ({ name, email }) =>
  await users.updateNameByEmail(name, email);

module.exports = {
  updateName,
};
