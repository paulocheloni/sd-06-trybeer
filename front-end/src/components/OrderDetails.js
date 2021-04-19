import React, { useContext } from 'react';
import { PropTypes } from 'prop-types';
import AppContext from '../context/app.context';

import OrderProduct from './OrderProduct';
import { convertDate } from '../utils';

export default function OrderDetails({ order }) {
  const { productsContext: { products } } = useContext(AppContext);

  if (!order.sale || !products) return 'Loading order...';

  return (
    <section className="order-detail-wrapper">
      <h3 data-testid="order-number">{ `Pedido ${order.id}` }</h3>
      <p data-testid="order-date">{ convertDate(order.sale_date)[0] }</p>
      { order.sale.map((curr, index) => (
        <OrderProduct index={ index } order={ curr } key={ index } />
      )) }
      <p data-testid="order-total-value">
        { `Total: R$ ${order.total_price.replace('.', ',')}` }
      </p>
    </section>
  );
}

OrderDetails.propTypes = {
  order: PropTypes.objectOf(PropTypes.any),
};

OrderDetails.defaultProps = {
  order: {},
};
