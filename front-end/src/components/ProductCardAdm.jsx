import React from 'react';
import PropTypes from 'prop-types';
import currencyFormat from '../utils/currencyFormat';

function ProductCardAdm({ product }) {
  console.log(product);
  /* - A quantidade do produto deverá conter a tag `data-testid="0-product-qtd"`

- O nome do produto deverá conter a tag `data-testid="0-product-name"`

- O valor total do produto deverá conter a tag `data-testid="0-product-total-value"` */
  return (
    <table>
      <tr>
        <span data-testid={ `${product.id - 1}-product-qtd` }>
          {`${product.productQuantity} - `}
        </span>
        <span data-testid={ `${product.id - 1}-product-name` }>
          {`${product.productName}`}
        </span>
      </tr>
      <tr>
        <span data-testid={ `${product.id - 1}-product-total-value` }>
          {currencyFormat(Number(product.productPrice * product.productQuantity))}
        </span>
        <span data-testid={ `${product.id - 1}-order-unit-price` }>
          (
          {currencyFormat(Number(product.productPrice))}
          )
        </span>
      </tr>
    </table>
  );
}

export default ProductCardAdm;

ProductCardAdm.propTypes = {
  product: PropTypes.shape({
    productName: PropTypes.string.isRequired,
    productQuantity: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    productPrice: PropTypes.string.isRequired,
  }).isRequired,
};
