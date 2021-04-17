import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Api from '../api/axiosApi';
import Header from '../components/Header';
import NavbarAdmin from '../components/NavBarAdmin';
import CardOrder from '../components/CardOrder';
import { Container, Content } from '../styles/styles';
import './OrderDetail.css';

function AdminOrderDetail() {
  const { id } = useParams();
  const [status, setStatus] = useState(null);
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    const findByID = async () => {
      const result = await Api.getByIdSales(id);
      setOrders(result);
      console.log(result);
      setStatus(result[0].status);
    };
    findByID();
  }, [id]);

  const handleStatusOrder = async () => {
    await Api.updateStatusOrder(id);
    setStatus('Entregue');
  };
  console.log(status);
  return (
    <section>
      <Header isAdmin />
      <NavbarAdmin />
      <Container>
        <Content>
          <div>
            {
              (orders && orders.length > 0) && (
                <div className="content">
                  <h2
                    className="order"
                    data-testid="order-number"
                  >
                    {`Pedido ${orders[0].id}`}
                  </h2>
                  <h2
                    data-testid="order-status"
                  >
                    { status || orders[0].status}
                  </h2>
                  <ul className="middle-card">
                    { orders.map((product, index) => (
                      <CardOrder
                        key={ index }
                        product={ product }
                        index={ index }
                      />
                    ))}
                  </ul>
                  <div
                    className="bottom-card total-value item-grid"
                    data-testid="order-total-value"
                  >
                    {
                      `Valor total do pedido:R$${orders[0].total_price.replace('.', ',')}`
                    }
                  </div>
                  {
                    status !== 'Entregue' && (
                      <button
                        type="button"
                        data-testid="mark-as-delivered-btn"
                        onClick={ () => handleStatusOrder() }
                      >
                        Marcar como entregue
                      </button>
                    )
                  }

                </div>
              )
            }
          </div>
        </Content>
      </Container>
    </section>
  );
}

export default AdminOrderDetail;
