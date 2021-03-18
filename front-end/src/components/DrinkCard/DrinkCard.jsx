import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './drinkCard.css'

const updateStorate = (cartItem, id) => {
  const oldStorage = JSON.parse(localStorage.getItem('cart'));
  let newStorage = []
  if(cartItem) {
    console.log('entrou no useEffect e atualizou o storage', cartItem)
    if(!oldStorage) {
      newStorage = [{ ...cartItem }]
      return localStorage.setItem('cart', JSON.stringify(newStorage))
    }
    const isItemInCart = oldStorage.filter(product => product.id === id).length
    if(!isItemInCart) {
      newStorage = [ ...oldStorage, { ...cartItem } ]
      return localStorage.setItem('cart', JSON.stringify(newStorage))
    }
    if(isItemInCart) {
      const oldStorageWithoutItem = oldStorage.filter(product => product.id !== id)
      newStorage = [...oldStorageWithoutItem, { ... cartItem }]
      return localStorage.setItem('cart', JSON.stringify(newStorage))
    }
  }
}

const getItemFromStorageOrCreate = (id) => {
  const cart = JSON.parse(localStorage.getItem('cart')) || '';
  const emptyItem = '';
  if (!cart) return emptyItem;
  const productInCart = cart.filter(product => product.id === id);
  if (!productInCart.length) return emptyItem;
  return productInCart
}

export default function DrinkCard({ productPayload, index }) {
  const { url_image, name, price, id } = productPayload;
  // const [cartItem, setCartItem] = useState(getItemFromStorageOrCreate(id));
  const [cartItem, setCartItem] = useState('');

  // console.log(cartItem)

  useEffect(() => {
    console.log('entrou no useEffect, mas não atualizou o storage')
    updateStorate(cartItem, id)
  }, [cartItem])

  const updateItem = () => {
    if (cartItem === '') {
      const newProduct = { name, id, price, quantity: 1, url_image }
      return setCartItem(newProduct)
    }

    const product = { ...cartItem, quantity: cartItem.quantity + 1 }
    return setCartItem(product);
  }


  const testIds = {
    priceId: `${index}-product-price`,
    imgId: `${index}-product-img`,
    nameId: `${index}-product-name`,
    plusId: `${index}-product-plus`,
    minusId: `${index}-product-minus`,
    qtdId: `${index}-product-qtd`,
  };

  const { priceId, imgId, nameId, plusId, minusId, qtdId } = testIds;

  return (
    <div>
      <p className="price-tag" data-testid={ priceId }>{price}</p>
      <img className="card-images" data-testid={ imgId } alt={ `${name} product card` } src={ url_image } />
      <p className="name-tag" data-testid={ nameId }>{name}</p>
      <div>
        <button type="button" className="plus-button" data-testid={ plusId } onClick={() => updateItem()}>+</button>
        <div data-testid={ qtdId }>0</div>
        <button type="button" className="minus-button" data-testid={ minusId }>-</button>
      </div>
    </div>
  );
}

// DrinkCard.propTypes = {
//   productPayload: PropTypes.shapeOf({
//     photo: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     price: PropTypes.string.isRequired,
//     quantity: PropTypes.string.isRequired,
//   }).isRequired,
//   index: PropTypes.number.isRequired,
// };
