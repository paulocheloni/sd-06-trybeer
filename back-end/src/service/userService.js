const userModel = require('../model/userModel');

const getAll = async () => {
  const result = await userModel.getAll();

  console.log(result);
  return result;
}

module.exports = {
  getAll,
};
