import React from 'react';
import ControllerHeader from '../components/ControllerHeader';
import Card from '../components/Card'
import ShowCart from '../components/ShowCart'
import img from '../img/beer.png';

function Products() {
  const info = { img, price: 2.50, name:"artesanal" }
  return (
    <div>
      <ControllerHeader/>
      <Card info={ info }/>
      <ShowCart />
    </div>
  );
}

export default Products;
