import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import productsContext from '../../context/productsContext';
import useStyles from './styles';

export default function OrderCard() {
  const { orders } = useContext(productsContext);
  const classes = useStyles();
  return (
    <main>
      <Container container spacing={ 4 }>
        {
          orders.length && orders.map((order, index) => (
            <Grid item key={ order.id } xs={ 12 } md={ 4 }>
              <Card className={ classes.card }>
                <CardContent>
                  <Typography>
                    { `Pedido ${order.id}` }
                  </Typography>
                  <Typography>
                    { order.sale_date }
                  </Typography>
                  <Typography>
                    { order.total_price }
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        }
      </Container>
    </main>
  );
}
