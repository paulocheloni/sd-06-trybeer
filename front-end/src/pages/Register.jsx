import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { verifyNameAndEmailAndPassword, handleCheckbox, handleSubmitRegister } from '../services';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [activeBtn, setActiveBtn] = useState(false);
  const [user, setUser] = useState({});
  const [checked, setChecked] = useState(false);
  const history = useHistory();

  useEffect(() => {
    verifyNameAndEmailAndPassword(name, email, password, setActiveBtn,
      setUser, checked, setChecked, user)
  }, [name, email, password]);

return (
  <div>
    <span>Nome</span>
    <input
      data-testid="signup-name"
      type="text"
      onChange={ (event) => setName(event.target.value) }
    />
    <span>Email</span>
    <input
      data-testid="signup-email"
      type="email"
      onChange={ (event) => setEmail(event.target.value) }
    />
    <span>Senha</span>
    <input
      data-testid="signup-password"
      type="password"
      onChange={ (event) => setPassword(event.target.value) }
    />
    <label htmlFor="checkbox">Quero vender
      <input
        type="checkbox"
        data-testid="signup-seller"
        checked={checked}
        onChange={ (e) => handleCheckbox(checked, setChecked, setUser, user, e) }
      />
    </label>
    <button disabled={ !activeBtn } data-testid="signup-btn"
      onClick={ () => handleSubmitRegister(name, email, password, checked, setUser, history) }>
      Cadastrar
    </button>
  </div>
);
}

export default Register;
