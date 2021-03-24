import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import MenuTop from '../components/menuClient/MenuTop';

import api from '../services/api';

const OrdersDetails = ({ match, history }) => {
  const [orderDetails, setOrderDetails] = useState([]);
  const { params: { id } } = match;

  useEffect(() => {
    async function fetchOrderDetails() {
      const user = JSON.parse(localStorage.user);
      const response = await api.getOrdersByDetails(user.token, id);
      if (response.message) return history.push('/login');
      setOrderDetails(response);
    }
    fetchOrderDetails();
  }, [history, id]);

  const handleDate = (dateTime) => {
    const date = new Date(dateTime);
    const twoNumber = -2;
    const day = (`0${date.getDate()}`).slice(twoNumber);
    const month = (`0${(date.getMonth() + 1)}`).slice(twoNumber);
    const formatDate = `${day}/${month}`;
    return formatDate;
  };

  const handleTotalValue = (price, quantity) => {
    const totalValue = price * quantity;
    const formatValue = totalValue.toFixed(2).replace('.', ',');
    return formatValue;
  };

  return (
    <div>
      <MenuTop name="Detalhes de Pedido" />
      <div
        data-testid="order-number"
      >
        {`Pedido ${id}`}
      </div>
      <div
        data-testid="order-date"
      >
        { orderDetails[0] ? handleDate(orderDetails[0].saleDate) : true }
      </div>
      <div>
        { orderDetails ? orderDetails.map((order, index) => (
          <div
            key={ index }
          >
            <div
              data-testid={ `${index}-product-qtd` }
            >
              { order.productQuantity }
            </div>
            <div
              data-testid={ `${index}-product-name` }
            >
              { order.productName }
            </div>
            <div
              data-testid={ `${index}-product-total-value` }
            >
              { `R$ ${handleTotalValue(order.productPrice, order.productQuantity)} ` }
            </div>
            <div
              data-testid="order-total-value"
            >
              { `R$ ${order.totalPrice.replace('.', ',')}` }
            </div>
          </div>
        ))
          : true }
      </div>
    </div>
  );
};

OrdersDetails.propTypes = {
  history: PropTypes.objectOf(Object).isRequired,
  match: PropTypes.objectOf(Object).isRequired,
};

export default OrdersDetails;
