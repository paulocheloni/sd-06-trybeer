import React, { useContext } from 'react';
import IconButton from '@material-ui/core/IconButton';
import ExposurePlus1Icon from '@material-ui/icons/ExposurePlus1';
import context from '../Context/ContextAPI';
import attTotalPrice from './addTotalPrice';

function ButtonAdd({ product }) {
  const { cart, setCart, setPrice } = useContext(context);

  const addButtonOnCart = () => {
    const isCart = cart.some((prod) => prod.name === product.name);
    if (!isCart) {
      return setCart([...cart, { quantity: 1, totalPrice: product.price, ...product }]);
    }
    const isIndex = cart.findIndex((prod) => prod.name === product.name);
    const newCart = [...cart];
    newCart[isIndex].quantity = newCart[isIndex].quantity + 1;
    newCart[isIndex].totalPrice = (newCart[isIndex].quantity * product.price).toFixed(2);
    setCart(newCart);
    attTotalPrice(cart, setPrice);
  };

  return (

    <IconButton color="primary" aria-label="add to shopping cart" onClick={ addButtonOnCart }>
      <ExposurePlus1Icon />
    </IconButton>
  );
}

export default ButtonAdd;
