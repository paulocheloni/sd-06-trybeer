import React, { useEffect, useState } from 'react';
import Header from '../../../components/Header/Header';
import CheckoutCard from '../../../components/checkoutCard/CheckoutCard';
import { parseCartPrice } from '../../../utils/parseValues';
import Button from '../../../components/Button/Button';
import { useHistory } from 'react-router-dom';
import { verifyUser } from '../../../store/LocalStorage/actions';

export default function Checkout(props) {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')));
  const [sum, setSum] = useState(props.location.state.sum)
  const [chkButton, setChkButton] = useState(true);
  const [chkForm, setChkForm] = useState({st: '', num: ''})
  
  const history = useHistory();
  useEffect(() => {
    // Só pra verificar se o usuário está logado
    // TALVEZ TENHA QUE MUDAR O SUM PRA ISSO FUNCIONAR  <<<<<
    verifyUser(history);
  }, [history])
  
  useEffect(() => {
    const sumNumber = Number(sum.split(' ')[1].replace(',', '.'));
    if (chkForm.st.length && chkForm.num.length && sumNumber > 0) {
      setChkButton(false);
    } else {
      setChkButton(true);
    }
  }, [sum, chkForm]);
  
  const changeState = (newState) => {
    // Muda o estado pra mudar os itens
    setCart(newState);
    
    // Mudar o preço
    const newCart = JSON.parse(localStorage.getItem('cart'));
    let newValue = 0;
    newCart.map((product) => {
      // console.log(product)
      newValue += Number(product.price);
    })
    setSum(parseCartPrice(newValue));
  }
  
  const renderProducts = () => {
    return cart.map(product => (
      <CheckoutCard product={product} changeState={changeState} />
    ))
  }
  
  const handleChange = (input, e) => {
    setChkForm({...chkForm, [input]: e.target.value});
  }
  
  return (
    <div>
      <Header title="Finalizar Pedido" user="client" />
      <h3>Produtos</h3>
      {renderProducts()}
      <span> Total: {sum} </span>
      <h3>Endereço</h3>
      <form>
        <label htmlFor="rua"><h4>Rua:</h4></label>
        <input type="text" id="rua" onChange={(e) => handleChange('st', e)} />
        <br />
        <label htmlFor="numero"><h4>Número da casa:</h4></label>
        <input type="text" id="numero" onChange={(e) => handleChange('num', e)} />
      </form>
      <Button 
        title="Finalizar pedido"
        isDisabled={chkButton}
        testId=''
        onClick={() => console.log('')}
      />
      
    </div>
  );
}
