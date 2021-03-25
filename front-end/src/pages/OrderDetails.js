import React, { useContext, useState, useEffect } from 'react';
import { Redirect, useParams, useHistory } from 'react-router-dom';
import AppContext from '../context/app.context';

import { Topbar, Loading, OrderDetails as OrderDetailComponent } from '../components';
import salesApi from '../services/api.sales';
import adminApi from '../services/api.admin';

export default function OrderDetails() {
  const { tokenContext: { token } } = useContext(AppContext);
  const [order, setOrder] = useState();
  const params = useParams();

  const history = useHistory();

  const title = (token.role === 'administrator') ? 'Detalhes de Pedido' : 'Meu Pedido';

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
        const currOrder = (token.role === 'administrator')
          ? await adminApi({ ...token, saleId: params.id })
          : await salesApi({ ...token, saleId: params.id });
        console.log('order detail fetch', currOrder);
        if (currOrder.code) {
          history.push({
            pathname: '/error',
            state: { ...currOrder } });
        }
        setOrder(currOrder);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOrder();
  }, [setOrder, params, token, history]);

  console.log('render', order);

  if (!token) return <Redirect to="/login" />;

  return (
    <section>
      <Topbar title={ title } />
      { (!order)
        ? <Loading />
        : <OrderDetailComponent order={ order } callback={ updateStatus } /> }
    </section>
  );
}
