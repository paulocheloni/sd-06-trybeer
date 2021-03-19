import React, { useEffect, useState, useContext } from 'react';
import SidebarMenu from '../components/SideBarMenu';
import TrybeerContext from '../context/TrybeerContext';
import TopMenu from '../components/TopMenu';
import { verifyToken } from '../utils/verifications';
import './Orders.css';

function Orders({ history }) {
  const [orders, setOrders] = useState([]);
  const { getFromLocalStorage } = useContext(TrybeerContext);
  const recoveredUser = getFromLocalStorage('user');

  const fetchOrders = async () => {
    const allOrders = await verifyToken('orders', recoveredUser, history);
      setOrders(allOrders);
  }

  useEffect(() => {
    fetchOrders()
    setTimeout(() => console.log(orders), 3000)
  },
    [setOrders])
  return (
    <div>
      <TopMenu 
        titleMenu="Meus Pedidos"
      />
      <SidebarMenu />
      <div className="content-panel">
        <div className="container">
          {
            orders.map(({sale_date, total_price}, index) => (
              <div
                className="order-card-container"
                data-testid={`${index}-order-card-container`}
              >
                <div className="card-id-date">
                  <div data-testid={`${index}-order-number`}>{index + 1}</div>
                  <div data-testid={`${index}-order-date`}>{sale_date}</div>
                </div>
                <div className="card-total" data-testid="0-order-total-value">{total_price}</div>
              </div>
            ))
          }
          

        </div>
      </div>
    </div>
  );
}

export default Orders;
