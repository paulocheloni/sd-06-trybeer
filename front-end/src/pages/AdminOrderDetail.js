import React, { useState, useEffect } from 'react';
import withOrders from '../components/hocs/withHandleApi';
import Api from '../api/axiosApi';
import Header from '../components/Header';
import NavbarAdmin from '../components/NavBarAdmin';
import CardOrder from '../components/CardOrder';
import { Container } from '../styles/styles';

function AdminOrderDetail(order) {
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (!order.loading) setStatus(order.data.status);
  }, [order.data.status, order.loading]);

  if (order.loading) return <h6> Loading...</h6>;

  return (
    <section>
      <Header isAdmin />
      <NavbarAdmin />
      <Container>
        <div>
          <h2
            className="order"
            data-testid="order-number"
          >
            {`Pedido ${order.data[0].id}`}
          </h2>
          <h2
            data-testid="order-status"
          >
            { status || order.data[0].status}
          </h2>
          {
            !order.loading && order.data.map((product, index) => (
              <CardOrder
                key={ index }
                product={ product }
                index={ index }
              />
            ))
          }
          <div
            className="bottom-card total-value item-grid"
            data-testid="order-total-value"
          >
            {` Valor total do pedido: R$ ${order.data[0].total_price.replace('.', ',')}`}
          </div>
          <button
            type="button"
            data-testid="mark-as-delivered-btn"
            onClick={ () => setStatus('Entregue') }
          >
            Marcar como entregue
          </button>

        </div>
      </Container>
    </section>
  );
}

export default withOrders(AdminOrderDetail, Api.getByIdSales, '1');
