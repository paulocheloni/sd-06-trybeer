import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
import { useHistory } from 'react-router-dom';
import ControllerHeader from '../components/ControllerHeader';
import Card from '../components/Card';
import ShowCart from '../components/ShowCart';

import { getProducts } from '../api/index';
import { tokenExists } from '../services/index';
=======
import ControllerHeader from '../components/ControllerHeader';
import { useHistory } from 'react-router-dom';
import Card from '../components/Card'
import ShowCart from '../components/ShowCart'

import { getProducts } from '../api/index'
import { tokenExists } from '../services/index'
>>>>>>> b5dc60dffa28154ca2901897bd3f8c70744a8638

function Products() {
  const [products, setProducts] = useState(false);
  const history = useHistory();

  useEffect(() => {
    tokenExists(history);
    getProducts(setProducts);
<<<<<<< HEAD
  }, [history]);

  return (
    <div>
      <ControllerHeader />
      { products && products.map((product) => <Card key={ product.id } product={ product } />) }
=======
  }, []);

  return (
    <div>
      <ControllerHeader/>
      { products && products.map((product) => <Card key={product.id} product = { product }/>) }
>>>>>>> b5dc60dffa28154ca2901897bd3f8c70744a8638
      <button type="button" onClick={ () => console.log(products) }>Console products</button>
      <ShowCart />
    </div>
  );
}

export default Products;
