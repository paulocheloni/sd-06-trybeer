import React, { useState, useEffect } from 'react';
import ControllerHeader from '../components/ControllerHeader';
import CheckoutCard from '../components/CheckoutCard';
import TotalCheckout from '../components/TotalCheckout';
import FormsCheckout from '../components/FormsCheckout';
import ButtonFinalizarPedido from '../components/ButtonFinalizarPedido';
import { getItensStorage, calculateTotal } from '../services/index';

function Checkout() {
  const [items, setItems] = useState(Object.values(getItensStorage()))
  const [total, setTotal] = useState(calculateTotal(getItensStorage()))
  const [address, setAddress] = useState({ address: '', number: '' })

  // useEffect(() => {
  //   console.log('refresh')
  // }, []);

  return (
    <div>
      <ControllerHeader />
      {/* <button onClick={ ()=> console.log(items)}>Console</button> */}
      { items.map((obj, index) => <CheckoutCard
        key={ index }
        index = { index }
        item={ obj }
        items={ obj }
        setTotal={setTotal}
        setItems={setItems}
      />) }
      <FormsCheckout setAddress={setAddress} address={address}/>
      <TotalCheckout total={total}/>
      <ButtonFinalizarPedido total={total} address={address}/>
    </div>
  );
}

export default Checkout;
