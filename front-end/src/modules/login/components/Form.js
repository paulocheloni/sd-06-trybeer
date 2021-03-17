import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import * as API from '../../../utils';

const patternEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
const patternPassword = /^[0-9]{6,}$/;

const patterns = { email: patternEmail, password: patternPassword };

function Form() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [errorForm, setErrorForm] = useState({ email: true, password: true });
  const [errorMsg, setErrorMsg] = useState('');
  const [seePassword, setSeePassword] = useState(true);
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
    <form className="flex flex-col mt-10" onSubmit={ handleSubmit }>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-2">
          <label htmlFor="email-ipt" className="flex flex-col space-y-2">
            <p>Email*</p>
            <input
              id="email-ipt"
              data-test-id="email-input"
              name="email"
              type="text"
              value={ form.email }
              onChange={ handleChangeInput }
              className="border rounded-md p-2 focus:outline-none
              focus:border-secondary-dark"
            />
          </label>
        </div>
        <label htmlFor="password-ipt" className="flex flex-col space-y-2">
          <p>Secret*</p>
          <p className="hidden">Senha</p>
          <div className="flex space-x-2 items-center">
            <input
              id="password-ipt"
              data-test-id="password-input"
              name="password"
              type={ !seePassword ? 'password' : 'text' }
              value={ form.password }
              onChange={ handleChangeInput }
              className="border rounded-md p-2 focus:outline-none
              focus:border-secondary-dark"
            />
            <button
              type="button"
              onClick={ () => setSeePassword((prev) => !prev) }
            >
              Icone
            </button>
          </div>
        </label>
        <div className="w-full mt-10 flex flex-col space-y-2">
          <p className={`bg-red-500 rounded-md p-2 ${errorMsg ? '' : 'hidden'}`}>{ errorMsg }</p>
          <button
            data-testid="signin-btn"
            className={ `rounded-md w-full p-2 ${(!errorForm.email && !errorForm.password)
              ? 'bg-secondary' : 'bg-gray-300'} focus:outline-none` }
            type="submit"
            disabled={ errorForm.email || errorForm.password }        >
            <p className="hidden">ENTRAR</p>
            <p className="hidden">Entrar</p>
            <p>Sign In</p>
          </button>
          <Link
            data-testid="no-account-btn"
            className="rounded-md border-secondary border w-full p-2
              text-center focus:outline-none"
            to="/register"
          >
            <p>Sign Up</p>
            <p className="hidden">Ainda não tenho conta</p>
          </Link>
          <p
            className="text-xs"
          >
            Forgot your passsword?
          </p>
        </div>
      </div>
    </form>
  );
}

export default Form;
