import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MenuSideBar from '../components/menuAdmin/MenuSideBar';

import api from '../services/api';
// import { valueTotal } from '../utils/checkoutUtils';

const AdminOrders = ({ history }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchOrders() {
      const user = JSON.parse(localStorage.user);
      const response = await api.getAllOrders(user.token);
      console.log(response);
      if (response.message) return history.push('/login');
      setOrders(response);
    }
    fetchOrders();
  }, [history]);

  const handleClick = (id) => {
    history.push(`/admin/orders/${id}`);
  };

  return (
    <div>
      <MenuSideBar />
      {orders.map((order, index) => (
        <div key={ index }>
          <button type="button" onClick={ () => handleClick(order.id) }>
            <p data-testid={ `${index}-order-number` }>
              {/* aqui ele quer espaço depois do pedido */}
              Pedido
              {order.id}
            </p>
            <p data-testid={ `${index}-order-address` }>
              {/* aqui ele quer uma vírgula e espaço depois da vírgula */}
              {order.delivery_address}
              {order.delivery_number}
            </p>
            <p data-testid={ `${index}-order-total-value` }>
              {/* aqui ele quer espaço depois do R$ */}
              R$
              {order.total_price}
            </p>
            {/* aqui ele quer uma vírgula, ao invés de ponto */}
            <p data-testid={ `${index}-order-status` }>{order.status}</p>
          </button>
        </div>
      ))}
    </div>
  );
};

AdminOrders.propTypes = {
  history: PropTypes.objectOf(Object).isRequired,
};

export default AdminOrders;
