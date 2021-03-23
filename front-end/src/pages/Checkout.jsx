import React, { useState } from 'react';
import ControllerHeader from '../components/ControllerHeader';
import CheckoutCard from '../components/CheckoutCard';
import TotalCheckout from '../components/TotalCheckout';
import FormsCheckout from '../components/FormsCheckout';
import CheckoutButton from '../components/CheckoutButton';
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
      <CheckoutButton total={ total } address={ address } />
    </div>
  );
}

export default Checkout;
