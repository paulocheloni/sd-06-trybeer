import React, { useContext, useState, useEffect } from 'react';
import { Redirect, useParams, useHistory } from 'react-router-dom';
import AppContext from '../context/app.context';

import { Topbar, Loading, OrderDetails as OrderDetailComponent } from '../components';
import salesApi from '../services/api.sales';
import adminApi from '../services/api.admin';

export default function OrderDetails() {
  const { tokenContext: { token } } = useContext(AppContext);

  const history = useHistory();
  const params = useParams();
  const [order, setOrder] = useState();

  const updateStatus = async (saleId, bool) => {
    try {
      await adminApi({ ...token, saleId, delivered: bool });
      setOrder({ ...order, status: 'Entregue' });
      return { status: 'OK', message: 'Sale status updated' };
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const currOrder = await salesApi({
          ...token,
          saleId: params.id,
        });
        if (currOrder.code) {
          history.push({
            pathname: '/error',
            state: { ...currOrder } });
        }
        setOrder(currOrder);
      } catch (error) {
        if (error.code) {
          history.push({
            pathname: '/error',
            state: { ...error } });
        }
      }
    };
    fetchOrder();
  }, [setOrder, params, token, history]);

  if (!token) return <Redirect to="/login" />;

  return (
    <section>
      <Topbar title="Detalhes de Pedido" />
      { (!order || !order.sale)
        ? <Loading />
        : <OrderDetailComponent order={ order } callback={ updateStatus } /> }
    </section>
  );
}
