import React from 'react';
import PropTypes from 'prop-types';

const deleteProduct = (product, changeState) => {
  const storage = JSON.parse(localStorage.getItem('cart'));
  const myItem = storage.find(item => item.id === product.id);
  storage.splice(storage.findIndex(item => item.id === myItem.id), 1);
  localStorage.setItem('cart', JSON.stringify(storage));
  
  changeState(JSON.parse(localStorage.getItem('cart')))
  return product;
}

const CheckoutCard = ({product, changeState}) => {
  const { quantity, name, price } = product;
  return (
    <div>
      <span>{quantity}</span>
      <span> - {name}</span>
      <span> {(price * quantity).toFixed(2)}</span>
      {/* <button type="button" onClick={() => deleteProduct(product.product)}>EXCLUIR</button> */}
      <button type="button" onClick={() => deleteProduct(product, changeState)}>EXCLUIR</button>
  </div>
  )
}

CheckoutCard.propTypes = {
  qtd: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
}

CheckoutCard.defaultProps = {
  qtd: 0,
  name: 'Produto Sem Nome',
  price: 'R$ 0,00',
}

export default CheckoutCard;
