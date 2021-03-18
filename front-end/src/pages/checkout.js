import React, { useContext, useEffect, useState } from 'react';
import NavBar from '../components/menuNavBar';
import { loadState, saveState } from '../services/localStorage';
import CheckoutButtonRemove from '../components/CheckOutButtonRemove';
import context from '../Context/ContextAPI';
import { useHistory } from 'react-router';

function Checkout() {
  const { cart, setCart, setNumberHouse, setStreet } = useContext(context);
  const [totalValue, setTotalValue] = useState();
  const [hidden, setHidden] = useState(true);
  const [email, setEmail] = useState(true);

  const history = useHistory();

  useEffect(() => {
    const loadUser = loadState('user');
    const loadCart = loadState(`${loadUser.email}`);
    setEmail(`${loadUser.email}`);
    const loadTotalValue = loadState(`${loadUser.email}_price`);
    setCart(loadCart);
    setTotalValue(loadTotalValue);
  }, []);

  const finishSale = () => {
    setHidden(false);
    setTimeout(()=> {
      saveState(email, []);
      history.push('/products');
    }, 2000)
  }

  return (
    <div>
      <NavBar content="Finalizar Pedido" />
      <h1>Checkout</h1>
      {cart.map((product, index) => {
        return (<div key={index}>
          <h3>{product.quantity}</h3>
          <h3>{product.name}</h3>
          <h4>{product.totalPrice}</h4>
          <h4>{product.price}(und)</h4>
          <CheckoutButtonRemove productIndex={index} />
        </div>)
      })}
      <h1>Endereco</h1>
      <label>
        Rua
        <input
          type="text"
          placeholder="digite sua Rua"
          onChange={ (e) => setStreet(e.target.value) }
        />
      </label>
      <label>
        Número da casa:
        <input
          type="text"
          placeholder="digite o numero da casa"
          onChange={ (e) => setNumberHouse(e.target.value) }
        />
      </label>
      <button onClick={finishSale}>Finalizar Pedido</button>
      <p1 hidden={hidden}>Compra realizada com sucesso!</p1>
    </div>
  );
}

export default Checkout;