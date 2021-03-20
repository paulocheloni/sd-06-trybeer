const parseCartPrice = (cartPrice) => {
  const roundedNumber = Math.round(cartPrice * 100) / 100;
  const parsedNumber = roundedNumber.toString().replace('.', ',');
  return parsedNumber;
};

module.exports = {
  parseCartPrice,
};
