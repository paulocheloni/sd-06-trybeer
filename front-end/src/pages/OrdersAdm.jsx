import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { SideBarAdm, OrderCardAdm } from '../components';
import { getAllOrders } from '../services/adm';

function OrderAdm() {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    getAllOrders().then((json) => setAllOrders(json));
  }, []);

  const history = useHistory();

  useEffect(() => {
    const user = localStorage.getItem('user');

    if (!user) history.push('/login');
  }, [history]);

  console.log(allOrders);

  return !allOrders ? <h1>Loading...</h1> : (
    <div>
      <h1> Pedidos </h1>
      <SideBarAdm />
      {allOrders.map((order, index) => (
        <OrderCardAdm
          key={ order.id }
          orderInfo={ order }
          index={ index }
        />))}

    </div>
  );
}

export default OrderAdm;
