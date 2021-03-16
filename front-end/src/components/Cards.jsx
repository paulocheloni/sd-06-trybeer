import React, { useEffect, useState } from 'react'
import api from '../services/api'

export default function Cards() {
  const [ products, setProducts ] = useState([]);

  const featchApiProduct = async() => {
    const allProducts = await api.fetchProducts();
    setProducts(allProducts);
  }

  useEffect(() => {
    featchApiProduct();
  }, []);

  return (
    <div>
      {products.map((product, index) => (
        <div key={product.id} >
          <h4 data-testid={`${index}-product-name`}>{product.name}</h4>
          <h5>{product.price}</h5>
          <img src={product.url_image}/>
          {console.log(product.url_image)}
        </div>
      ))}
    </div>
  )
}
