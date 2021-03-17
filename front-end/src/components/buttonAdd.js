import React, { useContext } from 'react';
import context from '../Context/ContextAPI';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function ButtonAdd({product}) {
  const { cart, setCart } = useContext(context);
  const classes = useStyles();

  const addButtonOnCart = () => {
    const isCart = cart.some((prod) => prod.name === product.name)
    if (!isCart) {
      return setCart([...cart, {quantity: 1, totalPrice: product.price, ...product}]);
    }
    const isIndex = cart.findIndex((prod) => prod.name === product.name)
    const newCart = cart;
    newCart[isIndex].quantity = newCart[isIndex].quantity + 1;
    newCart[isIndex].totalPrice = (newCart[isIndex].totalPrice + product.price).toFixed(2);

    setCart(newCart);
  }

  return (
    <div className={classes.root}>
      <IconButton color="primary" aria-label="add to shopping cart" onClick={addButtonOnCart}>
        <AddShoppingCartIcon />
      </IconButton>
    </div>
  );
}

export default ButtonAdd;
