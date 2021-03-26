const salesError = {
  statusCode: 500,
  customCode: 'ERROR_SALES',
  customMessage: 'Could not get sales. Please, contact support or try again later.',
};

const createError = {
  statusCode: 500,
  customCode: 'ERROR_SALE_CHECKOUT',
  customMessage: 'Checkout failed. Please, contact support or try again later.',
};

const detailsError = {
  statusCode: 500,
  customCode: 'ERROR_SALE_DETAILS',
  customMessage: 'Sale not found. Please, contact support or try again later.',
};

module.exports = {
  salesError,
  createError,
  detailsError,
};
