import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import CartItem from '../components/CartItem';
import MenuTop from '../components/MenuTop';

function Checkout() {
  const [cart, setCart] = useState([]);
  const [totalValue, setTotalValue] = useState(0);
  const [disabled, setDisabled] = useState(true);
  const [street, setStreet] = useState('');
  const [houseNR, setHouseNR] = useState(0);

  const history = useHistory();

  const auxFunc = async () => {
    const storageUser = JSON.parse(localStorage.getItem('user'));
    console.log(storageUser);

    if (!storageUser) {
      history.push('/login');
    }
  };

  const handleDisabled = () => {
    if (street !== '' && houseNR !== 0 && totalValue !== 0) {
      return setDisabled(false);
    }
    setDisabled(true);
  };

  const getLocalStorage = () => {
    setCart(JSON.parse(localStorage.getItem('cart')));
    setTotalValue(JSON.parse(localStorage.getItem('totalCart')));
  };

  useEffect(() => {
    auxFunc();
    getLocalStorage();
  }, []);

  useEffect(() => {
    handleDisabled();
  }, [street, houseNR]);

  return (
    <div>
      <MenuTop title="Finalizar Pedido" />
      <div>
        {cart.map((item, index) => (
          <CartItem
            key={ index }
            index={ index }
            name={ item.name }
            quantity={ item.quantity }
            price={ item.price }
          />))}
      </div>
      <p data-testid="order-total-value">{`Total: R$ ${totalValue}`}</p>
      <form>
        <h2>Endereço</h2>
        <label htmlFor="street">
          Rua:
          <input
            data-testid="checkout-street-input"
            type="text"
            name="street"
            onChange={ (e) => setStreet(e.target.value) }
          />
        </label>
        <label htmlFor="number">
          Número da casa
          <input
            data-testid="checkout-house-number-input"
            type="number"
            name="number"
            onChange={ (e) => setHouseNR(e.target.value) }
          />
        </label>
        <button
          disabled={ disabled }
          type="button"
          data-testid="checkout-finish-btn"
        >
          Finalizar Pedido
        </button>
      </form>
    </div>
  );
}

export default Checkout;
