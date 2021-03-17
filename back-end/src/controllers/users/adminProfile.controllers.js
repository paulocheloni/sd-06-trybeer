const { StatusCodes } = require('http-status-codes');
const { users } = require('../../services');
const { adminProfileError } = require('./error');

module.exports = async (req, res, next) => {
  try {
    const { userId } = req;
    const [[data]] = await users.getAdmin(parseInt(userId, 10));
    const { name, email } = data;
    return res.status(StatusCodes.OK).json({ name, email });
  } catch (err) {
    return next({ ...adminProfileError, err });
  }
};
