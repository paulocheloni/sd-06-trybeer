import React, { useState, useEffect } from 'react';
import { getCart, getFullCartPrice, setCart, addItem, subtractItem } from '../../utils/localStorageHandler'
import PropTypes from 'prop-types';
import './drinkCard.css'

const syncStorageWithCart = (cartItem, id) => {
  const newCartItem = { ...cartItem, default_product: false };
  const oldStorage = getCart();
  let newStorage = []
  if (newCartItem) {
    if (!oldStorage) {
      newStorage = [{ ...newCartItem }]
      return setCart(newStorage)
    }
    const isItemInCart = oldStorage.filter(product => product.id === id).length
    if (!isItemInCart) {
      newStorage = [...oldStorage, { ...newCartItem }]
      return setCart(newStorage)
    }
    if (isItemInCart) {
      const oldStorageWithoutItem = oldStorage.filter(product => product.id !== id)
      if (newCartItem.quantity === 0) {
        return setCart(oldStorageWithoutItem)
      }
      newStorage = [...oldStorageWithoutItem, { ...newCartItem }]
      return setCart(newStorage)
    }
  }
}

const recoverProductFromStorage = (url_image, name, price, id) => {
  const cart = getCart();
  let product = {id, name, price, quantity: 0, url_image, default_product: true }    
  
  if (!cart) return product;
  
  if (cart) {
    const result = cart.find(item => item.id === id);

    if (!result) return product;

    return result;
  }
};


export default function DrinkCard({ productPayload, index, setCartSum }) {
  const { url_image, name, price, id } = productPayload;
  const [cartItem, setCartItem] = useState(recoverProductFromStorage(url_image, name, price, id));

  useEffect(() => {
    if (!cartItem.default_product) {
      syncStorageWithCart(cartItem, id)
      setCartSum(getFullCartPrice())
    }
  }, [cartItem])

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
        <button type="button" className="plus-button" data-testid={ plusId } onClick={() => addItem(cartItem, setCartItem)}>+</button>
        <div data-testid={qtdId}>{cartItem.quantity}</div>
        <button type="button" className="minus-button" data-testid={minusId} onClick={() => subtractItem(cartItem, setCartItem)}>-</button>
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
