import React, { useState } from 'react';
import PropTypes from 'prop-types';

const inputs = (nome, email, senha, tipo, change) => {
  return (
    <div>
      <label>Nome
      <input type="text" name="nome" value={ nome } minLength="12" onChange={ change } data-testid="signup-name" />
      </label><br/>
      <label>Email
      <input type="email" name="email" value={ email } onChange={ change } data-testid="signup-email" />
      </label><br/>
      <label>Senha
      <input type="password" name="senha" minLength="6" value={ senha } onChange={ change } data-testid="signup-password" />
      </label><br/>
      <input type="checkbox" name="tipo" value="admin" onChange={ change } data-testid="signup-seller" />
      <label>Quero vender</label>
    </div>
  );
};

function Register({ history }) {
  const [ newUser, setNewUser ] = useState({ nome: '', email: '', senha: '', tipo: '' })

  const handleChange = ({ target }) => {
    return setNewUser({ [target.name]: target.value })
  };

  const handleClick = (e) => {
    e.preventDefault();
    localStorage.setItem('newUser', JSON.stringify(newUser));
    if(newUser.tipo === 'admin') {
      return history.push('/admin/oders')
    } else {
      return history.push('/products')
    }
  }

  return (
    <div>
      { inputs(newUser.nome, newUser.email, newUser.senha, newUser.tipo ? 'admin' : 'client', handleChange) }
      <button type="submit" data-testid="signup-btn" onClick={ handleClick }>Cadastrar</button>
    </div>
  );
}

Register.propTypes = {
  history: PropTypes.func.isRequired,
};

export default Register;
