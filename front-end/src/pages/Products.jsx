import React, { useEffect, useState } from 'react';
import ControllerHeader from '../components/ControllerHeader';
import Card from '../components/Card'
import ShowCart from '../components/ShowCart'
import img from '../img/beer.png';
import { getProducts } from '../api'

function Products() {
  const [products, setProducts] = useState([]);

  // const products = [
  //   { img, price: 2.50, name:"artesanal" },
  //   { img, price: 2.50, name:"artesanal" },
  //   { img, price: 2.50, name:"artesanal" },
  //   { img, price: 2.50, name:"artesanal" }
  // ]
  
  useEffect(() => {
    async function teste() {
      const availableProducts = await getProducts();
      { console.log('produtos', availableProducts) }
      setProducts(availableProducts)
    }

    teste()



  }, []);

  return (
    <div>
      <ControllerHeader />
      {
        products && products.length > 0
          ? products.map((product, index) => <Card products={ product } index={ index }/>)
          : 'There are no products to show'
      } 
      <ShowCart />
    </div>
  );
}

export default Products;
