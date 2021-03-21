import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { verifyRegister, handleCheckbox, handleSubmitRegister } from '../services';

function Register() {
  const [activeBtn, setActiveBtn] = useState(false);
  const [user, setUser] = useState({ name: '', email: '', password: '', role: '' });
  const [checked, setChecked] = useState(false);
  const history = useHistory();

  useEffect(() => verifyRegister(user, setActiveBtn), [checked, user]);

  return (
    <div className="test">
      <span>Nome</span>
      <input
        data-testid="signup-name"
        type="text"
        onChange={ (event) => setUser({ ...user, name: event.target.value }) }
      />
      <span>Email</span>
      <input
        data-testid="signup-email"
        type="email"
        onChange={ (event) => setUser({ ...user, email: event.target.value }) }
      />
      <span>Senha</span>
      <input
        data-testid="signup-password"
        type="password"
        onChange={ (event) => setUser({ ...user, password: event.target.value }) }
      />
      <label htmlFor="checkbox">
        Quero vender
        <input
          type="checkbox"
          data-testid="signup-seller"
          checked={ checked }
          onChange={ () => handleCheckbox(checked, setChecked, setUser, user) }
        />
      </label>
      <button
        data-testid="signup-btn"
        disabled={ !activeBtn }
        type="button"
        onClick={ () => handleSubmitRegister(user, checked, setUser, history) }
      >
        Cadastrar
      </button>
    </div>
  );
}

export default Register;
