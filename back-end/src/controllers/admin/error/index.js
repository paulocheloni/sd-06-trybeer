const salesError = {
  statusCode: 500,
  customCode: 'ERROR_SALES',
  customMessage: 'Could not get sales. Please, contact support or try again later.',
};

const detailsError = {
  statusCode: 404,
  customCode: 'SALE_NOT_FOUND',
  message: 'Sale not found. Please, contact support or try again later.',
};

const editError = {
  statusCode: 500,
  customCode: 'ERROR_EDIT',
  message: 'Could not edit sale. Please, contact support or try again later.',
};

module.exports = {
  salesError,
  detailsError,
  editError,
};
