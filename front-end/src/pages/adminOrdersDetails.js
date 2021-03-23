import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import NavBarAdmin from '../components/menuNavBarAdmin';
import api from '../services/api';
import { loadState } from '../services/localStorage';

function Admin() {
  const [order, setOrder] = useState({});
  const [send, setSend] = useState(false);
  const { id } = useParams();
  const history = useHistory();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const logon = loadState('user');
    if (!logon) return history.push('/login');
    if (logon.role === 'client') return history.push('/products');
  }, [history]);

  useEffect(() => {
    api.getByIdOrderAdmin(id)
      .then((response) => setOrder(response.data))
      .catch((err) => console.log(err));
  }, [id, send]);

  useEffect(() => {
    api.orderDetails(id)
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const sendProduct = async () => {
    api.updateStatusProduct(id)
      .then((response) => {
        console.log(response);
        setSend(true);
      })
      .catch((err) => console.log(err));
  };

  const isSend = () => {
    if (order.status === 'Pendente') {
      return (
        <button data-testid="mark-as-delivered-btn" type="button" onClick={ sendProduct }>Marcar como entregue</button>
      );
    }
  };

  return (
    <div>
      <NavBarAdmin content="Trybeer" />

      <h1 data-testid="order-status">
        {order.status}{' '}-{' '}
        
      </h1>
      {products.map((product, index) => (
        <div key={ index }>
          <h1 data-testid={`${index}-order-number`}>Pedido{' '}{order.id}</h1>
          <h3 data-testid={`${index}-product-qtd`}>{product.productQty}{' '}-{' '}<span data-testid={`${index}-product-name`}>{product.name}</span></h3>
          
          <h4 data-testid={`${index}-product-total-value`}>
            R$ {product.totalPrice.toFixed(2).toString().replace('.', ',') }
            <span data-testid={`${index}-order-unit-price`}>(R${' '}{ product.price.replace('.', ',')})</span>
          </h4>

        </div>
      ))}
      <h1 data-testid="order-total-value">
        Total:{' '}R$ {`${order.total_price}`.replace('.', ',')}
      </h1>
      {isSend()}
    </div>
  );
}

export default Admin;
