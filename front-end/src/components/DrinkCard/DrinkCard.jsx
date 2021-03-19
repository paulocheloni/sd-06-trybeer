import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './drinkCard.css'

/** local history e nulo inicialmente*/
/** todos os carts sao populados com quantity 0 */
/** tem produto no local history */
/** tem local history mas não o tem produto */
/** produto excluido do local history */
/** produto n pode sem menor que 0 */
const updateStorage = (cartItem, id) => {
  const oldStorage = JSON.parse(localStorage.getItem('cart'));
  let newStorage = [];
}

const syncStorageWithCart = (cartItem, id) => {
  console.log(cartItem);
  const newCartItem = { ...cartItem, default_product: false };
  console.log(`funcao syncStorageWithCart ${newCartItem}`);
  const oldStorage = JSON.parse(localStorage.getItem('cart'));
  let newStorage = []
  if (newCartItem) {
    if (!oldStorage) {
      newStorage = [{ ...newCartItem }]
      return localStorage.setItem('cart', JSON.stringify(newStorage))
    }
    const isItemInCart = oldStorage.filter(product => product.id === id).length
    if (!isItemInCart) {
      newStorage = [...oldStorage, { ...newCartItem }]
      return localStorage.setItem('cart', JSON.stringify(newStorage))
    }
    if (isItemInCart) {
      const oldStorageWithoutItem = oldStorage.filter(product => product.id !== id)
      if (newCartItem.quantity === 0) {
        return localStorage.setItem('cart', JSON.stringify(oldStorageWithoutItem));
      }
      newStorage = [...oldStorageWithoutItem, { ...newCartItem }]
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
  // ATENÇÂO!!!!!
  // const [cartItem, setCartItem] = useState(getItemFromStorageOrCreate(id));
  /** traz todos produtos do local history */
  const getLocalStorage = () => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    let product = {id, name, price, quantity: 0, url_image, default_product: true }    
    
    /** carrinho não existe */
    if (!cart) return product;
    
    if (cart) {
      const result = cart.find(item => item.id === id);

      /** carrinho existe mas n tem o produto */
      if (!result) return product;

      /** carrinho existe e tem o produto */
      return result;
    }
  };
  // const [cartItem, setCartItem] = useState('');
  
  const [cartItem, setCartItem] = useState(getLocalStorage());

  // useEffect(() => {
  //     setCartItem(getLocalStorage());
  // }, []);

  useEffect(() => {
    console.log('entrou no useEffect, mas não atualizou o storage')
    const oldStorage = JSON.parse(localStorage.getItem('cart')) || [];
    const isItemInCart = oldStorage.filter(product => product.id === id).length;
    
    if (!cartItem.default_product) {
      console.log(cartItem);
      syncStorageWithCart(cartItem, id)
    }
  }, [cartItem])

  const addItem = () => {
    if (cartItem === '') {
      const newProduct = { name, id, price, quantity: 1, url_image, default_product: false }
      return setCartItem(newProduct)
    }

    const product = { ...cartItem, quantity: cartItem.quantity + 1, default_product: false }
    return setCartItem(product);
  }

  const subtractItem = () => {
    if (cartItem === '') {
      return console.log('produto não existe ainda');
    }
    if (cartItem.quantity > 0) {
      const product = { ...cartItem, quantity: cartItem.quantity - 1, default_product: false };
      return setCartItem(product);
    }
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
        <button type="button" className="plus-button" data-testid={ plusId } onClick={() => addItem()}>+</button>
        <div data-testid={qtdId}>{cartItem.quantity}</div>
        <button type="button" className="minus-button" data-testid={minusId} onClick={() => subtractItem()}>-</button>
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
