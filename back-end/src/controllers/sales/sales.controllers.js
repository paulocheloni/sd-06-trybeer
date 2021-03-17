const { StatusCodes } = require('http-status-codes');
const { sales } = require('../../services');
const { salesError } = require('./error');

const getSalesByUser = async (req, res, next) => {
  try {
    const { userId } = req;
    const mySales = await sales.getByUser(userId);
    return res.status(StatusCodes.OK).json(mySales);
  } catch (err) {
    return next({ ...salesError, err });
  }
};

const getSaleById = async (req, res, next) => {
  try {
    const { saleId } = req.params;
    const { userId } = req;
    const mySale = await sales.getById(saleId);
    console.log(mySale);
    if (userId === mySale.user_id) {
      return res.status(StatusCodes.OK).json(mySale);
    }
    return res.status(StatusCodes.FORBIDDEN).json({ err: { message: 'Access denied.' } });
  } catch (err) {
    return next({ ...salesError, err });
  }
};

module.exports = {
  getSalesByUser,
  getSaleById,
};
