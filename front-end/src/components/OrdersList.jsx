import React from 'react';
import OrderCard from './OrderCard';

function OrdersList({ orders }) {
  return (
    <div className="ordersList">
      {
        orders
          .map((order, index) => (
            <OrderCard
              order={ order }
              orderIndex={ index }
              key={ order.name }
            />))
      }
    </div>
  );
}

export default OrdersList;

OrdersList.propTypes = {
  orders: PropTypes.Array.isRequired,
};
