import React, { useContext } from 'react';
import { PropTypes } from 'prop-types';
import AppContext from '../context/app.context';

export default function OrderProduct({ order, index }) {
  const {
    tokenContext: { token },
    productsContext: { products } } = useContext(AppContext);

  const calcProductTotal = (productId, quantity) => (
    (products.find((el) => el.id === productId).price * quantity).toFixed(2)
  );

  const getProductName = (productId) => products.find((el) => el.id === productId).name;
  const getProductPrice = (productId) => products.find((el) => el.id === productId).price;

  return (
    <section key={ index } className="order-details-product">
      <span data-testid={ `${index}-product-qtd` }>
        { order.quantity }
      </span>
      <span data-testid={ `${index}-product-name` } className="product-name">
        { getProductName(order.product_id) }
      </span>
      { (token.role === 'administrator') && (
        <span data-testid={ `${index}-order-unit-price` }>
          { `(R$ ${getProductPrice(order.product_id)
            .replace('.', ',')})` }
        </span>
      ) }
      <span data-testid={ `${index}-product-total-value` }>
        { `R$ ${calcProductTotal(order.product_id, order.quantity)
          .replace('.', ',')}` }
      </span>
    </section>
  );
}

OrderProduct.propTypes = {
  order: PropTypes.objectOf(PropTypes.any),
  index: PropTypes.number.isRequired,
};

OrderProduct.defaultProps = {
  order: {},
};
