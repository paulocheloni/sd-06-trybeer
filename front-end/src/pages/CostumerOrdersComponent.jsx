import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { CostumerOrders } from '../components';
import Header from '../components/Header';
import BeersAppContext from '../context/BeersAppContext';

function CostumerOrdersComponent() {
  const history = useHistory();
  const {
    user,
  } = useContext(BeersAppContext);

  if (!user.token) history.push('/login');

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
    <div className="costumer_orders">
      <Header text="Meus Pedidos" />
      {console.log(orders)}
      <h1 data-testid="top-title">Meus Pedidos</h1>
      <div className="order-list">
        {orders.map((element, index) => (
          <div key={ element.id }>
            <Link to={ `/orders/${element.id}` }>
              <CostumerOrders
                element={ element }
                index={ index }
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CostumerOrdersComponent;
