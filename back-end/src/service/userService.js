const userModel = require('../model/userModel');

const getAll = async () => {
  const result = await userModel.getAll();

  return result;
}

module.exports = {
  getAll,
};
