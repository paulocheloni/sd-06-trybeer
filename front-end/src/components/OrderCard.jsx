import React from 'react';
import { Link } from 'react-router-dom';
import ParseCurrency from '../utils/parseCurrencyToBRL';

function OrderCard({orderInfo, index}) {
  const { 
    id: orderId,
    total_price: totalPrice,
    delivery_address: address,
    delivery_number: number,
    sale_date: date,
    status,
  } = orderInfo;

  
  return (
    <Link  to={`/orders/${orderId}`}>
      <h3>
        <div data-testid={`${index }-order-card-number`}>{`Pedido ${orderId}`}</div>
        <div data-testid={`${index }-order-card-date`}>{date}</div>
      </h3>
      <div data-testid={`${index }-order-total-value`}>{ParseCurrency(totalPrice)}</div>
    </Link>

  );
}

export default OrderCard;
