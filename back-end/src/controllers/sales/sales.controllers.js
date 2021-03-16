const { StatusCodes } = require('http-status-codes');
const { sales } = require('../../services');
const { salesError } = require('./error');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const mySales = await sales.getById(id);
    return res.status(StatusCodes.OK).json(mySales);
  } catch (err) {
    return next({ ...salesError, err });
  }
};
