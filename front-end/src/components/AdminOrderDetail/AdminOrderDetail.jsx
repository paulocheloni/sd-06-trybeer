import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import fetches from '../../services/fetches';
import useStyles from './styles';

export default function AdminOrderDetail() {
  const classes = useStyles();
  const tokenFromLocalStorage = localStorage.getItem('token');
  const location = useLocation();
  const [orderDetail, setOrderDetail] = useState([]);
  const SIX = 6;
  const pathName = location.pathname;
  const adminPathName = pathName.substr(SIX);

  useEffect(() => {
    fetches.getSaleById(tokenFromLocalStorage, adminPathName)
      .then((response) => setOrderDetail(response.data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handletotalValue = () => {
    if (orderDetail.length) {
      const totalPrice = orderDetail
        .reduce((accumulator, current) => accumulator
          + (Number(current.quantity) * Number(current.price)), 0);
      const totalOrderPrice = (totalPrice.toFixed(2)).replace('.', ',');
      return totalOrderPrice;
    }
  };

  const handleChangeStatusButton = () => {
    fetches.updateSale(tokenFromLocalStorage, adminPathName);
    window.location.reload();
  };

  return (
    <main className={ classes.cardGrid } maxWidth="md">
      <Grid container spacing={ 4 }>
        <CardContent>
          <Typography
            data-testid="order-number"
          >
            {orderDetail.length && `Pedido ${orderDetail[0].sale_id}`}
          </Typography>
        </CardContent>
      </Grid>
    </main>
  );
}
