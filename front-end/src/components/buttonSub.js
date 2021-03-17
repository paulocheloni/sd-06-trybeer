import React, { useContext } from 'react';
import context from '../Context/ContextAPI';
import { makeStyles } from '@material-ui/core/styles';
import icon from '../resources/Remove_Circle.png';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function ButtonSub({product}) {
  const { cart, setCart } = useContext(context);
  const classes = useStyles();

  const subButtonOnCart = () => {
    const isCart = cart.some((prod) => prod.name === product.name)
    if (isCart) {
      const isIndex = cart.findIndex((prod) => prod.name === product.name)
      const newCart = [...cart];
      if (cart[isIndex].quantity > 1) {
        newCart[isIndex].quantity = newCart[isIndex].quantity - 1;
        newCart[isIndex].totalPrice = (newCart[isIndex].quantity * product.price).toFixed(2);

        setCart(newCart);
      } else {
        const newerCart = newCart.filter((elem) => elem.name !== product.name);
        return setCart(newerCart);
      }
    }
    return;
  }

  return (
    <div className={classes.root}>
      <img src={icon} onClick={subButtonOnCart} />
    </div>
  );
}

export default ButtonSub;
