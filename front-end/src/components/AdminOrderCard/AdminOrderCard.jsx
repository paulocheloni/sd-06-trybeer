import React from 'react';

export default function AdminOrderCard({sale, index}) {
  const { id, delivery_address, delivery_number, total_price, status } = sale;
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
        {delivery_address}, {delivery_number}
      </p>
      <div>
        <span
         data-testid={`${index}-order-total-value`}
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