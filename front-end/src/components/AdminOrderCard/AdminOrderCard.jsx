import React from 'react';

export default function AdminOrderCard({sales, index}) {
  const { id, delivery_adress, delivery_number, total_price, status } = sales;
  return (
    <div>
      <h3
        data-testid={`${index}-order-number`}
      >
        {id}
      </h3>
      <p
        data-testid={`${index}-order-address`}
      >
        {delivery_adress}, {delivery_number}
      </p>
      <div>
        <span
         // data-testid={`${index]}-order-roral-value`}
        >
          {total_price}
        </span>
        <span
           data-testid={`${index}-ordder-status`}
        >
          {status}
        </span>
      </div>
    </div>
  )
}