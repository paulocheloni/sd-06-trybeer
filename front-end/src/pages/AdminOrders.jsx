import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MenuTopAdmin from '../components/MenuTopAdmin';
import api from '../services/api';

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const allOrders = await api.fetchAllOrders();

    setOrders(allOrders);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div>
      <div>
        <MenuTopAdmin />
      </div>
      <div>
        <h1>Pedidos</h1>
        {orders.length !== 0 && orders.map((order, index) => (
          <Link
            to={ `/admin/orders/${order.id}` }
            key={ order.id }
          >
            <div>
              <span data-testid={ `${index}-order-number` }>
                { `Pedido ${order.id}` }
              </span>
              <br />
              <span data-testid={ `${index}-order-address` }>
                { `${order.delivery_address}, ${order.delivery_number}` }
              </span>
              <br />
              <span data-testid={ `${index}-order-total-value` }>
                { Number(order.total_price)
                  .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }
              </span>
              <br />
              <span data-testid={ `${index}-order-status` }>{ order.status }</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
