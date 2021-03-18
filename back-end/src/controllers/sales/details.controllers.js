const { StatusCodes } = require('http-status-codes');
const { sales } = require('../../services');
const { salesError } = require('./error');

module.exports = async (req, res, next) => {
  try {
    const { userId, params: { saleId } } = req;
    const mySale = await sales.filterByUserId(saleId, userId);
    return res.status(StatusCodes.OK).json(mySale);
  } catch (err) {
    return next({ ...salesError, err });
  }
};
