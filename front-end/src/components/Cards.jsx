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
          <h5 data-testid={`${index}-product-price`}>{product.price}</h5>
          <img data-testid={`${index}-product-img`} src={product.url_image}/>
          {console.log(product.url_image)}
          <button data-testid={`${index}-product-minus`} type="button"> - </button>
          <span data-testid={`${index}-product-qtd`} >X coisas</span>
          <button data-testid={`${index}-product-plus`} type="button"> + </button>

        </div>
      ))}
    </div>
  )
}
