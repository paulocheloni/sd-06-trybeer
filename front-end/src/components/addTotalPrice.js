function attTotalPrice(array, total) {
    
  const result = array.reduce((acomulador, element) => {
    const number = parseInt(element.totalPrice);
    return acomulador + number;
  }, 0);
  total(result);
}

export default attTotalPrice;
