import React, { useEffect, useState } from 'react';
import MenuTopAdmin from '../components/MenuTopAdmin';
import api from '../services/api';

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const allOrders = await api.fetchAllOrders;

    setOrders(allOrders)
  }

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div>
      <MenuTopAdmin />
      <h1>Pedidos</h1>
      {orders && orders.map((order, index) => (
        <div>
          <span>Pedido </span>
          <span data-testid={`${index}-order-number`}>{order.id}</span>
          <br/>
          <span data-testid={`${index}-order-address`}>{order.delivery_address}</span>
          <span>, {order.delivery_number}</span>
          <br/>
          <span data-testid={`${index}-order-total-value`}>{Number(order.total_price)
            .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
          <br/>
          <span data-testid={`${index}-order-status`}>{order.status}</span>
        </div>
      ))}
    </div>
  );
}
