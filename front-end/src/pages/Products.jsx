import React, { useEffect } from 'react';
import ControllerHeader from '../components/ControllerHeader';
import Card from '../components/Card'
import ShowCart from '../components/ShowCart'
import img from '../img/beer.png';
import { getProducts } from '../api'

function Products() {
  const products = [
    { img, price: 2.50, name:"artesanal" },
    { img, price: 2.50, name:"artesanal" },
    { img, price: 2.50, name:"artesanal" },
    { img, price: 2.50, name:"artesanal" }
  ]
  
  useEffect(() => {
    getProducts()
  });

  return (
    <div>
      <ControllerHeader/>
      {
        products
          ? products.map((product, index) => <Card products={ products } index={ index }/>)
          : 'There are no products to show'
      }
      <ShowCart />
    </div>
  );
}

export default Products;
