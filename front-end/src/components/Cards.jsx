import React, { useEffect, useState } from 'react'
import api from '../services/api'

export default function Cards() {
  const [ products, setProducts ] = useState([]);
  const [ quantProd, setQuantProd ] = useState([]);

  const featchApiProduct = async() => {
    const allProducts = await api.fetchProducts();
    setProducts(allProducts);
    console.log(allProducts)
  };

  const somarQtd = (index) => {
    // const qtd = document.getElementById(index);
    // const numero = qtd.innerText;
    // console.log(qtd);
    // numero += 1;
    // qtd.innerText = numero;
    // ...quantProd, index : qtd de index
  }

  const preenchendoONumerodeQtd = () => {
    setQuantProd( ...quantProd, )
  };



  useEffect(() => {
    featchApiProduct();
    preenchendoONumerodeQtd();
  }, []);

  return (
    <div>
      {products.map((product, index) => (
        <div key={product.id} >
          <h4 data-testid={`${index}-product-name`}>{product.name}</h4>
          <h5 data-testid={`${index}-product-price`}>{product.price}</h5>
          {/* <img data-testid={`${index}-product-img`} src={product.url_image}/> */}
          <button
            id={`${index}-minus`}
            data-testid={`${index}-product-minus`}
            type="button"
            // onClick={(id) => mudarQtd(id)}
          >
            -
          </button>
          <span data-testid={`${index}-product-qtd`} id={index} >quantity</span>
          <button
            id={`${index}-plus`}
            data-testid={`${index}-product-plus`}
            type="button"
            // onClick={(index) => somarQtd(index)}
          >
            +
          </button>

        </div>
      ))}
    </div>
  )
}
