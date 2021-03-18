import React, { useEffect } from 'react';
import SidebarMenu from '../components/SideBarMenu';
import TopMenu from '../components/TopMenu';
import './Orders.css';

function Orders() {
  const fetchOrders = () => {
    await fetchFunctions.get('orders').then((ordersArray) => {
      setOrders(ordersArray);
    });
  }
  useEffect(() => {fetchOrders()}, [])
  return (
    <div>
      <TopMenu 
        titleMenu="Meus Pedidos"
      />
      <SidebarMenu />
      <div className="content-panel">
        <div className="container">
          <div
            className="order-card-container"
            data-testid="0-order-card-container"
          >
            <div className="card-id-date">
              <div data-testid="0-order-number">order_id</div>
              <div data-testid="0-order-date">order_date</div>
            </div>
            <div className="card-total" data-testid="0-order-total-value">Total</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
