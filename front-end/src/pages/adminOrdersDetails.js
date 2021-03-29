import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

// Componentes
import NavBarAdmin from '../components/menuNavBarAdmin';
import api from '../services/api';
import { loadState } from '../services/localStorage';


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
        <button
          data-testid="mark-as-delivered-btn"
          type="button"
          onClick={ sendProduct }
        >
          Marcar como entregue
        </button>
      );
    }
  };

  return (
    <div>
      <NavBarAdmin content="Trybeer" />
      <div className={classes.root}>
        <Grid container style={ { alignContent: 'center' } } direction="column" spacing={2}>
        <h1 data-testid="order-status">
          {order.status}
        </h1>
        {products.map((product, index) => (
          <Grid item xs={10}>
            {console.log(product)}
              <Paper className={classes.paper} elevation={3}>
                <Grid container spacing={0}>
                  <Grid item style={ { maxHeight: 100} }>
                    <ButtonBase className={classes.number}>
                    <img
                      className={ classes.image }
                      src={ product.imgUrl.replace(/ /g, '_') }
                      data-testid={ `${index}-product-img` }
                      alt={ product.name }
                      style={ { maxHeight: 80 } }
                    />
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={0}>
                      <Grid item xs>
                        <Typography
                          gutterBottom
                          variant="subtitle1"
                          data-testid={ `${index}-order-number` }
                        >
                          <h3 data-testid={ `${index}-product-qtd` }>
                            {`${product.productQty} - `}
                            <span data-testid={ `${index}-product-name` }>{product.name}</span>
                          </h3>
                        </Typography>
                        <Typography
                          variant="body2"
                          gutterBottom
                          data-testid={ `${index}-order-address` }
                        >
                          <h4 data-testid={ `${index}-product-total-value` }>
                            R$
                            {` ${product.totalPrice.toFixed(2)} `.replace('.', ',') }
                            <span data-testid={ `${index}-order-unit-price` }>
                              {`(R$ ${product.price})`.replace('.', ',')}
                            </span>
                          </h4>
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="subtitle1"
                      data-testid={ `${index}-order-total-value` }
                    >
                      {`R$ ${order.total_price}`.replace('.', ',')}
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          ))}
          <h1 data-testid="order-total-value">
            {`Total: R$ ${order.total_price}`.replace('.', ',')}
          </h1>
          {isSend()}
        </Grid>
      </div>
    </div>
  );
}

export default Admin;
