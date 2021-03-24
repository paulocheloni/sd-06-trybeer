import React, { useContext, useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import AppContext from '../context/app.context';
import { Topbar, Loading } from '../components';
import salesApi from '../services/api.sales';

export default function Profile() {
  const { tokenContext: { token } } = useContext(AppContext);
  const [orders, setOrders] = useState();

  useEffect(() => {
    const magicTime = 100;
    const fetchOrders = async () => {
      const ordersArray = await salesApi(token).catch((error) => error);
      setTimeout(() => setOrders(ordersArray), magicTime);
      // setOrders(ordersArray);
    };
    fetchOrders();
  }, [setOrders, token]);

  if (!token) return <Redirect to="/login" />;
  console.log(orders);
  return (
    <section>
      <Topbar title="Meus Pedidos" />
      { (!orders)
        ? <Loading />
        : (
          <section className="orders-container">
            { orders.map(({ id, total_price: totalPrice, sale_date: date }, index) => (
              <section
                className="order-card"
                key={ `${index}-${id}` }
                data-testid={ `${index}-order-card-container` }
              >
                <section className="name" data-testid={ `${index}-product-name` }>
                  Pedido
                  <strong>{ id }</strong>
                </section>
                <section className="total" data-testid={ `${index}-order-date` }>
                  { `R$ ${totalPrice.replace('.', ',')}` }
                </section>
                <section className="date" data-testid={ `${id}-order-date` }>
                  { `${date.getDate()}/${date.getMonth()}` }
                  { date.getFullYear() }
                </section>
              </section>
            )) }
          </section>
        ) }
    </section>
  );
}
