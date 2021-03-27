import React, { useContext } from 'react';
import TrybeerContext from '../context/TrybeerContext';
import { login } from '../api/axiosApi'
import ErroPage from './ErroPage';


export default function Login(props) {
  const { history } = props;
  const { loginUser, setLoginUser } = useContext(TrybeerContext)
  const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
  const validEmail = regexEmail.test(loginUser.email)
  const validPassword = loginUser.password.length > 5;

  const handleLogin = async (loginUser) => {
    const user = await login({loginUser})
    localStorage.setItem('user', JSON.stringify(user))
    console.log(user)
    // if (user.response) return <h1>Deu Ruim...</h1>
    if (user.role === 'client') {
      history.push('/products')
    } else if (user.role === 'administrator') {
      history.push('/admin/orders')
    } else {
      setLoginUser({...loginUser, erro: true})
    }
  }

  if (loginUser.erro) return (
    <ErroPage />
  )
  
  return (
    <section>
      <form>
        <label>
          Email
        <input
          type="email"
          data-testid="email-input"
          name="email"
          onChange={ (event) => setLoginUser({ ...loginUser, email: event.target.value}) }
        />
        </label>
        <label>
          Senha
        <input
          type="password"
          data-testid="password-input"
          onChange={ (event) => setLoginUser({ ...loginUser, password: event.target.value}) }
        />
        </label>
        <button
          type="button"
          data-testid="signin-btn"
          disabled={ !validEmail|| !validPassword }
          onClick={ () => handleLogin(loginUser) }
          
        >
          Entrar
        </button>
        <button
          type="button"
          data-testid="no-account-btn"
          onClick={ () => history.push('/register') }
        >
          Ainda não tenho conta
        </button>
      </form>
    </section>
  );
}
