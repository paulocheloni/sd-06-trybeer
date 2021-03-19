import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as API from '../../../utils';
import Buttons from './Buttons';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';

function Form() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [errorForm, setErrorForm] = useState({ email: true, password: true });
  const [errorMsg, setErrorMsg] = useState('');
  const history = useHistory();

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
        { EmailInput(setErrorForm, setForm, form.email) }
        { PasswordInput(setErrorForm, setForm, form.password) }
        { Buttons(errorMsg, errorForm) }
      </div>
    </form>
  );
}

export default Form;