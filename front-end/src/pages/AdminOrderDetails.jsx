import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import api from '../services/api';
import MenuSideBar from '../components/menuAdmin/MenuSideBar';
import RenderOrder from '../components/AdminOrderDetail/RenderOrder';

function AdminOrderDetails({ match, history }) {
  const [productDetail, setProductDetail] = useState([]);
  const [estado, setEstado] = useState([]);
  const [change, setChange] = useState(false);
  const { params: { id } } = match;

  useEffect(() => {
    const productDetails = async () => {
      const user = JSON.parse(localStorage.getItem('user'));
      const { token } = user;
      if (!user) {
        history.push('/login');
      }
      const orders = await api.getAllOrders(token);
      const findStatus = orders.map((item) => item.status);
      setEstado(findStatus);
      const details = await api.getOrdersByDetails(token, id);
      setProductDetail(details);
    };
    productDetails();
  }, [history, id]);

  const handleClick = async () => {
    setEstado('Entregue');
    if (estado === 'Pendente') {
      setChange(false);
    }
    setChange(true);
    /* const changeBackStatus = await api.changeStatus(estado); */
  };

  return (
    <div>
      <MenuSideBar />
      <h1 data-testid="order-number">
        {`Pedido ${id}`}
        -
      </h1>
      <h1 data-testid="order-status">{`${estado}`}</h1>
      <RenderOrder productDetail={ productDetail } />
      <button
        type="button"
        hidden={ change }
        onClick={ handleClick }
        data-testid="mark-as-delivered-btn"
      >
        Marcar como entregue
      </button>
    </div>
  );
}

AdminOrderDetails.propTypes = {
  match: PropTypes.objectOf(Object).isRequired,
  history: PropTypes.objectOf(Object).isRequired,
};

export default AdminOrderDetails;
