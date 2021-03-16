import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { register } from '../../services/Users';
import { validateEmail, validatePassword, validateName } from '../../utils/validations';
import "./Register.css";

const inputComponents = [
  {
    title: 'Nome',
    type: 'text',
    testId: 'signup-name',
    placeholder: 'Seu nome',
  },
  {
    title: 'Email',
    type: 'text',
    testId: 'signup-email',
    placeholder: 'Informe o email do Usuário',
  },
  {
    title: 'Senha',
    type: 'password',
    testId: 'signup-password',
    placeholder: 'Informe a senha',
  },
];

const registerRedirect = async ({ name, email, password, isSeller, history }) => {
  const role = isSeller ? 'administrator' : 'client';
  const result = await register(name, email, password, role);
  console.log(result);
  if (result.message) return console.log(result.message);
  localStorage.setItem('user', JSON.stringify(result));
  if (result.role === 'administrator') return history.push('/admin/orders');
  if (result.role === 'client') return history.push('/products');
  return null;
};

const setStateSwitch = ({ field, value, setEmail, setPassword, setName }) => {
  if (field === 'Email') return setEmail(value);
  if (field === 'Name') return setName(value);
  return setPassword(value);
};

export default function Register() {
  console.log("oi");
  const [isDisabled, setIsDisabled] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isSeller, setIsSeller] = useState(false);
  const history = useHistory();
  useEffect(() => {
    if (validateEmail(email) && validatePassword(password) && validateName(name)) {
      setIsDisabled(false);
    }
  }, [email, password, name]);
  const setField = (field, value) => {
    setStateSwitch({ field, value, setEmail, setPassword, setName });
  };
  const inputValues = [name, email, password];
  return (
    <div className="container">
      <form className="inputs">
        {inputComponents.map((component, index) => (
          <Input
            key={ index }
            title={ component.title }
            type={ component.type }
            testId={ component.testId }
            placeholder={ component.placeholder }
            value={ inputValues[index] }
            onChange={ setField }
          />
        ))}
        <label htmlFor="check">
          Quero vender
          <input
            type="checkbox"
            data-testid="signup-seller"
            checked={ isSeller }
            onClick={ () => setIsSeller(!isSeller) }
            id="check"
          />
        </label>
        <Button
          title="Cadastrar"
          testId="signup-btn"
          isDisabled={ isDisabled }
          onClick={ () => registerRedirect({ name, email, password, isSeller, history }) }
        />
      </form>
    </div>
  );
}
