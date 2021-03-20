import React, { useState, useEffect } from 'react';
import Header from '../../../components/Header/Header';
import CheckoutCard from '../../../components/checkoutCard/CheckoutCard';

export default function Checkout(props) {
  const [cart, setCart] = useState([]);
  const { sum } = props.location.state; // preço total que vem do Products, pelo history
  
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart')));
    console.log(JSON.parse(localStorage.getItem('cart')))
  }, []);
  
  const renderProducts = () => {
    return cart.map(product => (
      <CheckoutCard qtd={product.quantity} name={product.name} price={product.price} />
    ))
  }
  
  return (
    <div>
      <Header title="Finalizar Pedido" user="client" />
      <h3>Produtos</h3>
      {renderProducts()}
      <span> Total: {sum} </span>
    </div>
  );
}
