import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import NavbarAdmin from '../components/NavBarAdmin';
import withAuth from '../components/withAuth';
import { getSales } from '../api/axiosApi';
import { Container } from '../styles/styles';

function AdminOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const callApi = async () => {
      const respOrders = await getSales();
      console.log(respOrders);
      setOrders(respOrders);
      localStorage.setItem('sales', JSON.stringify(respOrders));
    };
    callApi();
  }, []);

  return (
    <div>
      <Header />
      <NavbarAdmin />
      <Container>
        {
          orders.length > 0 && orders.map((order, index) => (
            <ul key="index">
              <Link to={ `/admin/orders/${index + 1}` }>
                <button
                  type="button"
                  data-testid={ `${index}-order-number` }
                >
                  {`Pedido ${index + 1}`}
                </button>
                <p
                  data-testid={ `${index}-order-address` }
                >
                  {`${order.delivery_address}, ${order.delivery_number}`}
                </p>
                <p
                  data-testid={ `${index}-order-total-value` }
                >
                  {`R$ ${order.total_price.replace('.', ',')}`}
                </p>
                <p
                  data-testid={ `${index}-order-status` }
                >
                  { order.status }
                </p>
              </Link>

            </ul>
          ))
        }
      </Container>
    </div>
  );
}

export default withAuth(AdminOrders);
