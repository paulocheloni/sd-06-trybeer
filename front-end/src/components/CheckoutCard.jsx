import React, { useEffect } from 'react';
import '../css/CheckoutCard.css';
import { deleteItemCart } from '../services/index';

function CheckoutCard(props) {
  const { item } = props;
  const { index } = props;
  const product = JSON.parse(item)
  const { setTotal } = props;
  const { setItems } = props;
  const params = { item, product, setTotal, setItems }

  return (
    <div className="checkout-card-container">
      <p data-testid={ `${index}-product-qtd-input` }>Quantidade: {product.total}</p>
      <p data-testid={ `${index}-product-name` }>{product.name}</p>
      <p data-testid={ `${index}-product-unit-price` }>RS: {product.price.replace('.', ',')}</p>
      <p data-testid={ `${index}-product-total-value` }>Total Produto RS: {JSON.stringify((parseFloat(product.price) * product.total)
      .toFixed(2)).replace('.', ',')}</p>
      <button data-testid={ `${index}-removal-button` } type="button" onClick={ () => deleteItemCart(params) }>Excluir</button>
    </div>
  );
}

export default CheckoutCard;
