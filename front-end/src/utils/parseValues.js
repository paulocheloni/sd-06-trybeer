const parseCartPrice = (cartPrice) => {
  const roundedNumber = (Math.round(cartPrice * 100) / 100).toFixed(2);
  const parsedNumber = roundedNumber.toString().replace('.', ',');
  const numberWith$ = `R$ ${parsedNumber}`;
  return numberWith$;
};

module.exports = {
  parseCartPrice,
};
