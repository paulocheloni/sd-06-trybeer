import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import NavBarAdmin from '../components/menuNavBarAdmin';
import api from '../services/api';
import { loadState } from '../services/localStorage';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

// CSS - Material-UI
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  number: {
    width: 128,
    height: 128,
    fontSize: 30,
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

function Admin() {
  const classes = useStyles();
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
        <button type="button" onClick={ sendProduct }>Marca como entregue</button>
      );
    }
  };

  return (
    <div>
      <NavBarAdmin content="Trybeer" />
      <h1>
        Pedidos
        {order.id}
      </h1>
      <h1>{order.status}</h1>
      {products.map((product, index) => (
        <div key={ index }>
          <h3>{product.productQty}</h3>
          <h3>{product.name}</h3>
          <h4>{product.totalPrice}</h4>
          <h5>
            R$ (
            {product.price}
            )
          </h5>
        </div>
      ))}
      <h1>
        Total
        {order.total_price}
      </h1>
      {isSend()}
    </div>
  );
}

export default Admin;
