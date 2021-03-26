import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { SideBarAdm } from '../components';
import { markAsDelivered, getOrderDetails } from '../services/adm';
import parseCurrency from '../utils/parseCurrencyToBRL';

function DetailsOrderAdm({ match }) {
  const [orderDetails, setOrderDetails] = useState([]);
  const [status, setStatus] = useState('Pendente');
  const history = useHistory();
  const { id } = match.params;

  useEffect(() => {
    const user = localStorage.getItem('user');

    if (!user) history.push('/login');

    getOrderDetails(id).then((response) => { setOrderDetails(response); });
  }, []);

  useEffect(() => {
    getOrderDetails(id).then((response) => { setOrderDetails(response); });
  }, [status]);

  const handleClick = () => {
    markAsDelivered(id);
    setStatus('Entregue');
  };

  return !orderDetails ? <h1>Loading...</h1> : (
    <div>
      <SideBarAdm />
      <br />
      <br />
      <br />
      <br />
      <br />
      <span data-testid="order-number">
        {`Pedido ${id}`}
      </span>
      <span data-testid="order-status">
        {status}
      </span>
      <ul>
        {(orderDetails.map((order, index) => (
          <li key={ index }>
            <span data-testid={ `${index}-product-qtd` }>
              { `${order.quantity}  ` }
            </span>
            <span data-testid={ `${index}-product-name` }>
              { ` ${order.name}  ` }
            </span>
            <span data-testid={ `${index}-product-total-value` }>
              { parseCurrency(`${(order.price * order.quantity).toFixed(2)}`) }
            </span>
            <span data-testid={ `${index}-order-unit-price` }>
              { `  (${parseCurrency(order.price)})` }
            </span>
          </li>)))}
      </ul>
      <span data-testid="order-total-value">
        Total:
        { orderDetails.map((order) => parseCurrency(order.total_price))[0] }
      </span>
      <button
        type="button"
        data-testid="mark-as-delivered-btn"
        onClick={ handleClick }
        hidden={ status === 'Entregue' }
      >
        Marcar pedido como entregue
      </button>
    </div>
  );
}

DetailsOrderAdm.propTypes = {
  match: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
};

export default DetailsOrderAdm;
