import React, { useState } from 'react';
import ControllerHeader from '../components/Header-SideBar/ControllerHeader';
import CheckoutCard from '../components/Checkout/CheckoutCard';
import TotalCheckout from '../components/Checkout/TotalCheckout';
import FormsCheckout from '../components/Checkout/FormsCheckout';
import CheckoutButton from '../components/Checkout/CheckoutButton';
import { getItensStorage, calculateTotal } from '../services/index';

function Checkout() {
  const [items, setItems] = useState(Object.values(getItensStorage()));
  const [total, setTotal] = useState(calculateTotal(getItensStorage()));
  const [address, setAddress] = useState({ address: '', number: '' });

  return (
    <div>
      <ControllerHeader />
      { items.map((obj, index) => (<CheckoutCard
        key={ index }
        index={ index }
        item={ obj }
        items={ obj }
        setTotal={ setTotal }
        setItems={ setItems }
      />)) }
      <FormsCheckout setAddress={ setAddress } address={ address } />
      <TotalCheckout total={ total } />
      <CheckoutButton total={ total } address={ address } items={ items } />
    </div>
  );
}

export default Checkout;
