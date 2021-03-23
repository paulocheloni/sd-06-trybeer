const BAD_REQUEST = 400;

const notValidSale = {
  payload: { message: 'The sale is missing total price, status or customer identity.' },
  status: BAD_REQUEST,
};

const saleValidation = async (reqBody) => {
  const { idUser, total, status } = reqBody;

  if (!idUser || !total || !status) return notValidSale;
  return true;
};

module.exports = saleValidation;
