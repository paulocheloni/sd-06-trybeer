const { StatusCodes } = require('http-status-codes');
const { sales } = require('../../services');
const { salesError } = require('./error');

module.exports = async (req, res, next) => {
  try {
    const { userRole, params: { saleId } } = req;
    const mySale = await sales.updateById(saleId, userRole);
    return res.status(StatusCodes.OK).json(mySale);
  } catch (err) {
    return next({ ...salesError, err });
  }
};
