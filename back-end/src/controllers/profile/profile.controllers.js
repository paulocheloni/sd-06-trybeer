const { StatusCodes } = require('http-status-codes');
const { users } = require('../../services');
const { profileError } = require('./error');

module.exports = async (req, res, next) => {
  try {
    const { body } = req;
    await users.updateName(body);
    return res.status(StatusCodes.OK).end();
  } catch (err) {
    return next({ ...profileError, err });
  }
};
