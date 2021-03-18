const { StatusCodes } = require('http-status-codes');
const { admin } = require('../../services');
const { salesError } = require('./error');

module.exports = async (req, res, next) => {
  try {
    const { params: { id } } = req;
    const sale = await admin.getSaleById(id);
    return res.status(StatusCodes.OK).json(sale);
  } catch (err) {
    return next({ ...salesError, err });
  }
};
