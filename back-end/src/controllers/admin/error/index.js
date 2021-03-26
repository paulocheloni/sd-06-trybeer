const salesError = {
  statusCode: 500,
  customCode: 'ERROR_SALES',
  customMessage: 'Could not get sales. Please, contact support or try again later.',
};

const notFound = {
  statusCode: 404,
  customCode: 'SALE_NOT_FOUND',
  message: 'Sale not found.' };

module.exports = {
  salesError,
  notFound,
};
