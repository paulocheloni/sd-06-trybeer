import React, {useState} from 'react';

// const addProductToCart = (cart, id, operator) => {
//   const newCart = [...cart]
//   const newProduct = newCart.filter(product => product.productId === id)
//   newProduct[quantity] += 1
//   return newProduct
// }

const addProductToCart = ({ product }) => {
  const { name, id, price, quantity, img } = product
  
}

const cartProvider = ({ children }) => {
  const cart = [
    {
      productId: '',
      productName: '',
      quantity: '',
      price: '',
      img: '',
    }
  ]


  // return (

  // )
}
