import React, { useContext, useState, useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';

import AppContext from '../context/app.context';
import { Topbar, Loading } from '../components';
import adminApi from '../services/api.admin';

import '../styles/Orders.css';
import OrdersContainer from '../components/OrdersContainer';

export default function AdminOrders() {
  const { tokenContext: { token } } = useContext(AppContext);
  const [orders, setOrders] = useState();

  const history = useHistory();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const ordersArray = await adminApi(token);
        setOrders(ordersArray);
      } catch (error) {
        console.log(error);
      //   history.push({
      //     pathname: '/error',
      //     state: { ...error } });
      }
    };
    fetchOrders();
  }, [setOrders, token, history]);

  if (!token) return <Redirect to="/login" />;

  return (
    <section>
      <Topbar title="Pedidos" />
      { (!orders)
        ? <Loading />
        : <OrdersContainer orders={ orders } /> }
    </section>
  );
}
