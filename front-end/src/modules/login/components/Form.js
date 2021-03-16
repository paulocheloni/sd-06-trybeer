import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as API from '../../../utils';

const patternEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
const patternPassword = /^[0-9]{6,}$/;

const patterns = { email: patternEmail, password: patternPassword };

function Form() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [errorForm, setErrorForm] = useState({ email: '', password: '' });
  const [errorMsg, setErrorMsg] = useState('');
  const history = useHistory();

  const handleChangeInput = ({ target }) => {
    const { name, value } = target;
    const validation = patterns[name].test(value);
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrorForm((prev) => ({ ...prev, [name]: !validation }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await API.post('/login', form);
    if (response.message) return setErrorMsg(response.message);
    localStorage.setItem('user', JSON.stringify(response));
    const { role } = response;
    history.push(role === 'client' ? '/products' : '/admin/orders');
  };

  return (
    <form onSubmit={ handleSubmit }>
      <input
        data-test-id="email-input"
        name="email"
        type="text"
        value={ form.email }
        onChange={ handleChangeInput }
      />
      <input
        data-test-id="password-input"
        name="password"
        type="text"
        value={ form.password }
        onChange={ handleChangeInput }
      />
      <p>{ errorMsg }</p>
      <button
        data-test-id="signin-btn"
        type="submit"
        disabled={ errorForm.email || errorForm.password }
      >
        <p>Entrar ENTRAR (esconder)</p>
        <p>Sign In</p>
      </button>
    </form>
  );
}

export default Form;
