import React, { useContext, useEffect, useState } from 'react';
import { SideBarAdmin, AdminOrdersCards } from '../components';
import BeersAppContext from '../context/BeersAppContext';

function AdminOrders() {
  const {
    user,
  } = useContext(BeersAppContext);

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/orders', {
      headers: {
        'Content-Type': 'application/json',
        authorization: user.token,
      },
    }).then((response) => response.json())
      .then((data) => setOrders(data));
  }, []);

  return (
    <div className="admin_orders">
      <SideBarAdmin />
      <h1>Pedidos</h1>
      <div className="order-list">
        {orders.map((element, index) => (
          <div key={ element.id }>
            <AdminOrdersCards
              element={ element }
              index={ index }
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminOrders;
