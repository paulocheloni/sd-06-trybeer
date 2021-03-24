import React from 'react';
import ParseCurrency from '../utils/parseCurrencyToBRL';

function OrderCard({orderInfo}) {
  const { 
    id: orderId,
    total_price: totalPrice,
    delivery_address: address,
    delivery_number: number,
    sale_date: date,
    status,
  } = orderInfo;

  return (
    <div>
      <h3>
        <div>{`Pedido ${orderId}`}</div>
        <div>{date}</div>
      </h3>
      <div>{ParseCurrency(totalPrice)}</div>
    </div>

  );
}

export default OrderCard;
