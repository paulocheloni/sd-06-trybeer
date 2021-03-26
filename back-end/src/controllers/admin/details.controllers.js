const { StatusCodes } = require('http-status-codes');
const { admin } = require('../../services');
const { salesError, notFound } = require('./error');

module.exports = async (req, res, next) => {
  try {
    const { params: { id }, userRole } = req;
    const sale = await admin.getSaleById(id, userRole);
    if (!sale) res.status(StatusCodes.NOT_FOUND).json({ ...notFound });
    return res.status(StatusCodes.OK).json(sale);
  } catch (err) {
    return next({ ...salesError, err });
  }
};
