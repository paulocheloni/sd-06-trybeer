const disable = (setAble, products, address) => {
  const lengthZero = 0;
  const listLength = products.length > lengthZero;
  if (listLength && address.rua !== '' && address.numero !== '') {
    setAble(false);
  } else {
    return setAble(true);
  }
};

module.exports = { disable };
