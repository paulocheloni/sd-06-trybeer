import React, { useState, useEffect } from 'react';
import ControllerHeader from '../components/ControllerHeader';
import SideBar from '../components/SideBar';

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    tokenExists(history);
    getOrders(setOrders);
  }, [history]);

  return (
    <div>
      <ControllerHeader />
      <section>
        {
          orders && orders.map(order => <OrderCard order={ order }/>)
        }
      </section>
    </div>
  );
}

export default Orders;