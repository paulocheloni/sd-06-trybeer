import React, { useEffect, useState } from 'react';
import NavBarAdmin from '../components/menuNavBarAdmin';
import { useHistory, useParams } from 'react-router';
import api from '../services/api';
import { loadState } from '../services/localStorage';

function Admin() {
  const [order, setOrder] = useState({});
  const [send, setSend] = useState(false);
  const { id }  = useParams();
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
    .catch((err) => console.log(err))
  }, [send]);

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
    .then((response) => setSend(true))
    .catch((err) => console.log(err));
  }

  const isSend = () => {
    if (order.status === 'Pendente') 
      return (
        <button type="button" onClick={sendProduct}>Marca como entregue</button>
      )
  }

  return (
    <div>
      <NavBarAdmin content="Trybeer" />
      <h1>Pedidos {order.id}</h1>
      <h1>{order.status}</h1>
      {products.map((product, index) => {
        return (
          <div key={index}>
            <h3>{product.productQty}</h3>
            <h3>{product.name}</h3>
            <h4>{product.totalPrice}</h4>
            <h5>R$ ({product.price})</h5>
          </div>
        )
      })}
      <h1>Total {order.total_price}</h1>
      {isSend()}
    </div>
  );
}

export default Admin;