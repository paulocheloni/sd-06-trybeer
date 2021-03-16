const { StatusCodes } = require('http-status-codes');
const { users } = require('../../services');
const { profileError } = require('./error');

module.exports = async (req, res, next) => {
  try {
    const { body, userId } = req;
    await users.updateName(body, userId);
    return res.status(StatusCodes.OK).json({ message: 'Name updated successfully.' });
  } catch (err) {
    return next({ ...profileError, err });
  }
};
