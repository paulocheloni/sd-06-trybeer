const { StatusCodes } = require('http-status-codes');
const { admin } = require('../../services');
const { salesError } = require('./error');

module.exports = async (req, res, next) => {
  try {
    const { body: { delivered }, params: { id } } = req;
    const status = await admin.changeSaleStatus(id, delivered);
    return res.status(StatusCodes.OK).json({ message: 'Success', ...status });
  } catch (err) {
    return next({ ...salesError, err });
  }
};
