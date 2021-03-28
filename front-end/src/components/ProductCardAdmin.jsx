import React from 'react';
import PropTypes from 'prop-types';
import '../css/CheckoutCard.css';
import '../css/ProductCardAdmin.css';

function ProductCardAdmin(props) {
  const { product, index } = props;
  const { productName, productPrice, quantity } = product;
  const productTotal = parseFloat(productPrice) * parseFloat(quantity);

  return (
    <div className="checkout-card-container">
      <div>
        <p
          data-testid={ `${index}-product-qtd` }
          className="quantity-width"  
        >{ quantity }</p>
        <p data-testid={ `${index}-product-name` }>{ ` - ${productName}` }</p>
        <p data-testid={ `${index}-product-total-value` } >
          {`R$ ${productTotal.toFixed(2).toString().replace('.', ',')}`}
        </p>
        <p data-testid={ `${index}-order-unit-price` } >
          {`(R$ ${productPrice.replace('.', ',')})`}
        </p>
      </div>
    </div>
  );
}

ProductCardAdmin.propTypes = {
  product: PropTypes.shape({
    productName: PropTypes.string.isRequired,
    productPrice: PropTypes.string.isRequired,
    quantity: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default ProductCardAdmin;
