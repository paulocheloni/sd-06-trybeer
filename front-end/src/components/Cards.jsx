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
      {products.map((product) => (
        <div>{product.name}</div>
      ))}
    </div>
  )
}
