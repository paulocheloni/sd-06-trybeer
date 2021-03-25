import React, { useContext } from 'react';
import { PropTypes } from 'prop-types';
import AppContext from '../context/app.context';

import { convertDate } from '../utils';

export default function OrderDetails({ order, callback }) {
  const {
    tokenContext: { token },
    productsContext: { products } } = useContext(AppContext);

  const calcProductTotal = (productId, quantity) => (
    (products.find((el) => el.id === productId).price * quantity).toFixed(2)
  );

  const getProductName = (productId) => products.find((el) => el.id === productId).name;
  const getProductPrice = (productId) => products.find((el) => el.id === productId).price;

  if (!order.sale || !products) return 'Loading order...';

  console.log('component', order);

  return (
    <>
      <h3 data-testid="order-number">{ `Pedido ${order.id}` }</h3>
      <p data-testid="order-date">{ convertDate(order.sale_date)[0] }</p>
      { (token.role === 'administrator')
        && <p data-testid="order-status">{ order.status }</p> }
      { order.sale.map((curr, index) => (
        <section key={ index }>
          <p data-testid={ `${index}-product-qtd` }>
            { curr.quantity }
          </p>
          <p data-testid={ `${index}-product-name` }>
            { getProductName(curr.product_id) }
          </p>
          { (token.role === 'administrator') && (
            <p data-testid={ `${index}-order-unit-price` }>
              { `(R$ ${getProductPrice(curr.product_id)
                .replace('.', ',')})` }
            </p>
          ) }
          <p data-testid={ `${index}-product-total-value` }>
            { `R$ ${calcProductTotal(curr.product_id, curr.quantity)
              .replace('.', ',')}` }
          </p>
        </section>
      )) }
      <p data-testid="order-total-value">
        { `Total: R$ ${order.total_price.replace('.', ',')}` }
      </p>
      { (token.role === 'administrator' && order.status === 'Pendente') && (
        <button
          type="button"
          onClick={ () => callback(order.id, true) }
          data-testid="mark-as-delivered-btn"
        >
          Marcar como entregue
        </button>
      ) }
    </>
  );
}

OrderDetails.propTypes = {
  order: PropTypes.objectOf(PropTypes.any),
  callback: PropTypes.func,
};

OrderDetails.defaultProps = {
  order: {},
  callback: () => {},
};
