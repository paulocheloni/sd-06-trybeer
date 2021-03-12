import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import fetchLogin from '../../services/Login'

import './Login.css';

import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'


export default function Login() {
  const [isDisabled, setIsDisabled] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userRole, setUserRole] = useState(null)

  const history = useHistory();

  useEffect(() => {
    if(validateEmail(email) && validatePassword(password)) {
      setIsDisabled(false)
    }
  }, [email, password])

  const setField = (field, value) => {
    if (field === 'Email') {
      setEmail(value)
    } else if (field === 'Senha') {
      setPassword(value)
    }
  }

  const validateEmail = (email) => {
    const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]{0,2})?$/

    return regexEmail.test(email)
  }

  const validatePassword = (password) => {
    const regexPassword = /[a-z0-9]+/

    return (regexPassword.test(password) && password.length >= 6)
  }

  const userRedirect = async () => {
    const result = await fetchLogin(email, password)
    console.log(result);
    
    if (result.message) return alert(result.message);
    
    localStorage.setItem('user', JSON.stringify(result));
    
    if (result.role === 'administrator') {
      history.push('/admin/profile')
    } else if (result.role === 'client'){
      history.push('/products')
    } else {
      return null
    }
  }

  return (
    <div className="loginForm">
      <form className="loginInput">
        <Input
          title="Email"
          type="text"
          testId="email-input"
          value={email}
          onChange={setField}         
          placeholder="Informe o email do Usuário"
        />
        <Input title="Senha" type="password" testId="password-input" value={password} onChange={setField} userRole={userRole} placeholder="Informe a senha"/>
        <Button title="ENTRAR" testId="signin-btn" isDisabled={isDisabled} onClick={userRedirect}/>
        <Button title="Ainda não tenho conta" testId="no-account-btn" onClick={() => history.push('/register')}/>
      </form>
    </div>
  );
}
