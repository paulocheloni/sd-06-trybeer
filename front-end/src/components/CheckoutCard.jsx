import React from 'react';
import PropTypes from 'prop-types';
import '../css/CheckoutCard.css';
import { deleteItemCart } from '../services/index';

function CheckoutCard(props) {
  const { item, index, setTotal, setItems } = props;
  const product = JSON.parse(item);
  const params = { item, product, setTotal, setItems };

  return (
    <div className="checkout-card-container">
      <p data-testid={ `${index}-product-qtd-input` }>
        Quantidade:
        {product.total}
      </p>
      <p data-testid={ `${index}-product-name` }>{product.name}</p>
      <p data-testid={ `${index}-product-unit-price` }>
        (
        R$
        {product.price.replace('.', ',')}
        {' '}
        un
        )
      </p>
      <p data-testid={ `${index}-product-total-value` }>
        Total Produto R$
        {(parseFloat(product.price) * product.total).toFixed(2).replace('.', ',')}
      </p>
      <button
        data-testid={ `${index}-removal-button` }
        type="button"
        onClick={ () => deleteItemCart(params) }
      >
        Excluir
      </button>
    </div>
  );
}

CheckoutCard.propTypes = {
  item: PropTypes.shapeOf(PropTypes.string).isRequired,
  index: PropTypes.number.isRequired,
  setTotal: PropTypes.func.isRequired,
  setItems: PropTypes.func.isRequired,
};

export default CheckoutCard;
