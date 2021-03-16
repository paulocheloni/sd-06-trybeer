const { StatusCodes } = require('http-status-codes');
const { profile } = require('../../services');
const { profileError } = require('./error');

module.exports = async (req, res, next) => {
  try {
    const { body } = req;
    await profile.updateName(body);
    return res.status(StatusCodes.OK).end();
  } catch (err) {
    return next({ ...profileError, err });
  }
};
