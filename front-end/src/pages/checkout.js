import React, { useContext, useEffect, useState } from 'react';
import NavBar from '../components/menuNavBar';
import { loadState, saveState } from '../services/localStorage';
import CheckoutButtonRemove from '../components/CheckOutButtonRemove';
import context from '../Context/ContextAPI';
import { useHistory } from 'react-router';

function Checkout() {
  const { cart, setNumberHouse, setStreet, price, setPrice } = useContext(context);
  const [hidden, setHidden] = useState(true);
  const [email, setEmail] = useState('');

  const history = useHistory();

  useEffect(() => {
    const logon = loadState('user');
    if (!logon) return history.push('/login');
    if (logon.role === 'administrator') return history.push('/admin/orders');
  }, [history]);

  useEffect(() => {
    const loadUser = loadState('user');
    setEmail(loadUser.email);
    const loadTotalValue = loadState(`${loadUser.email}_price`);
    setPrice(loadTotalValue);
  }, [cart]);

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
          <CheckoutButtonRemove productId={product.id} productIndex={index} />
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
      <h1>TOTAL R$ {price}</h1>
      <button onClick={finishSale}>Finalizar Pedido</button>
      <p hidden={hidden}>Compra realizada com sucesso!</p>
    </div>
  );
}

export default Checkout;