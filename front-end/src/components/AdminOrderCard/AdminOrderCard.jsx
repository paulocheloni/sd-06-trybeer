import React, { useState, useEffect } from 'react';

const orderMock = {
  orderId: 'Pedido 001',
  orderAddress: 'Rua Antônio de Barbosa',
  orderTotalPrice: 'R$  355,10',
  orderStatus: 'Pendente',
}

export default function AdminOrderCard() {
  const {orderId, orderAddress, orderTotalPrice, orderStatus} = orderMock;
  return (
    <div>
      <h3
        // data-testid={`${index}-order-number`}
      >
        {orderId}
      </h3>
      <p
        // data-testid={`${index}-order-address`}
      >
        {orderAddress}
      </p>
      <div>
        <span
         // data-testid={`${index]}-order-roral-value`}
        >
          {orderTotalPrice}
        </span>
        <span
          //  data-testid={`${index}`-ordder-status}
        >
          {orderStatus}
        </span>
      </div>
    </div>
  )
}