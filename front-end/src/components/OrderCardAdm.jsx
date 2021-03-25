import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import ParseCurrency from '../utils/parseCurrencyToBRL';

function OrderCardAdm({ orderInfo, index }) {
  const {
    id,
    delivery_address: house,
    delivery_number: numberHouse,
    total_price: totalPrice,
    status,
  } = orderInfo;

  const history = useHistory();

  return (
    <button type="button" onClick={ () => history.push(`/admin/orders/${id}`) }>
      <div>
        <h3 data-testid={ `${index}-order-number` }>
          {' '}
          {`Pedido ${id}`}
        </h3>
        <h4 data-testid={ `${index}-order-address` }>
          {' '}
          {`${house}, ${numberHouse}`}
        </h4>
      </div>
      <div data-testid={ `${index}-order-total-value` }>{ParseCurrency(totalPrice)}</div>
      <div data-testid={ `${index}-order-status` }>{status}</div>
    </button>

  );
}

OrderCardAdm.propTypes = {
  orderInfo: {
    id: PropTypes.number,
    delivery_address: PropTypes.string,
    delivery_number: PropTypes.string,
    totalPrice: PropTypes.string,
    status: PropTypes.string,
  }.isRequired,
  index: PropTypes.number.isRequired,
};

export default OrderCardAdm;
