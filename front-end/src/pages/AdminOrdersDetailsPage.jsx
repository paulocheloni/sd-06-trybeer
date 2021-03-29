import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router';
import BeersAppContext from '../context/BeersAppContext';
import {
  AdminDetailsOrdersCardsComponent,
  AdminSideBarComponent,
} from '../components';

function AdminOrdersDetailsPage() {
  const { id } = useParams();
  const {
    user,
  } = useContext(BeersAppContext);

  const [AdminOrders, setAdminOrders] = useState([]);
  const [messageError, setMessageError] = useState('');

  useEffect(() => {
    fetch(`http://
    calhost:3001/admin/orders/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        authorization: user.token,
      },
    }).then((response) => response.json())
      .then((data) => setAdminOrders(data));
  }, []);

  const totalPrice = AdminOrders
    .reduce((total, element) => {
      const price = parseFloat(total) + parseFloat(element.productPrice);
      return price;
    }, 0).toFixed(2);

  const statusConvert = (status) => {
    switch (status) {
    case 'PENDING': return 'Pendente';
    case 'DELIVERED': return 'Entregue';
    default: return '';
    }
  };

  const statusOrder = () => {
    if (AdminOrders.length !== 0) {
      const { status } = AdminOrders[0];
      return statusConvert(status);
    }
    return '';
  };

  const updateStatus = async () => {
    const returnUpdate = await fetch(`http://localhost:3001/admin/orders/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        authorization: user.token,
      },
    }).then((response) => response.json());
    if (returnUpdate.err) return setMessageError(returnUpdate.err);
    setMessageError('');
    const AdminOrdersStatusUpdate = AdminOrders
      .map((element) => ({ ...element, status: 'DELIVERED' }));
    setAdminOrders(AdminOrdersStatusUpdate);
  };

  return (
    <div className="admin_orders_details">
      <AdminSideBarComponent />
      <h1 data-testid="order-number">{ `Pedido ${id}` }</h1>
      <h1 data-testid="order-status">{ statusOrder() }</h1>
      {AdminOrders.map((element, index) => (
        <div key={ index }>
          <AdminDetailsOrdersCardsComponent
            element={ element }
            index={ index }
          />
        </div>
      ))}
      <p data-testid="order-total-value">{ `R$ ${totalPrice.replace('.', ',')}` }</p>
      {statusOrder() === 'Pendente' && (
        <button
          type="button"
          data-testid="mark-as-delivered-btn"
          onClick={ updateStatus }
        >
          Marcar como entregue
        </button>
      )}
      <span>{ messageError }</span>
    </div>
  );
}

export default AdminOrdersDetailsPage;
