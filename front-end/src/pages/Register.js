import React, { useState } from 'react';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [enableButton, setEnableButton] = useState(false);

  const checkName = () => {
    if (name.length < 12) return false;
    // regex
    return true;
  }

  const checkEmail = () => {
    if (name.length < 12) return false;
    return true;
  }

  const checkPassword = () => {
    
  }

  return (
    <div>
      <fieldset>
        <form action="" method="POST">
          <input
            data-testid="signup-name"
            type="text"
            name="name"
            placeholder="Nome"
            onChange={ (event) => setName(event.target.value) }
          />
          <input
            data-testid="signup-email"
            type="email"
            name="email"
            placeholder="Email"
            onChange={ (event) => setEmail(event.target.value) }
          />
          <input
            data-testid="signup-password"
            type="password"
            name="password"
            placeholder="Senha"
            onChange={ (event) => setPassword(event.target.value) }
          />
          <label>
            <input
              data-testid="signup-seller"
              type="checkbox"
              name="role"
              onChange={ (event) => setIsChecked(!isChecked) }
            />
            Quero vender          
          </label>
          <button
            data-testid="signup-btn"
            type="submit"
            desabled={ enableButton }
          >
            Cadastrar
          </button>
        </form>
      </fieldset> 
    </div>
  );
}

export default Register;
