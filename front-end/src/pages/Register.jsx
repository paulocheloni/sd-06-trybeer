import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import RegisterContext from '../context/RegisterContext';
import FormRegister from '../components/pageRegister/FormRegister';
import visibilityBtnRegister from '../utils/visibilityBtnRegister';
import api from '../services/api';

function Register({ history }) {
  const [newUser, setUser] = useState({ name: '', email: '', senha: '', tipo: 'client' });
  const [valid, setValid] = useState(true);

  useEffect(() => {
    visibilityBtnRegister(newUser, setValid);
  }, [newUser]);

  const handleChange = ({ target }) => {
    if (target.name === 'tipo') {
      console.log(target.checked);
      if (target.checked === true) setUser({ ...newUser, [target.name]: target.value });
      else setUser({ ...newUser, [target.name]: 'client' });
    } else { setUser({ ...newUser, [target.name]: target.value }); }
  };

  const handleClick = async (e) => {
    e.preventDefault();

    const { name, email, senha, tipo } = newUser;

    const registerUser = await api.registerUser(name, email, senha, tipo);
    console.log(registerUser.message);
    if (newUser.tipo === 'admin') history.push('/admin/orders');
    else history.push('/products');
    localStorage.setItem('newUser', JSON.stringify(newUser));
  };

  return (
    <RegisterContext.Provider
      value={ {
        change: handleChange,
        click: handleClick,
        user: newUser,
        isValid: valid,
      } }
    >
      <FormRegister />
    </RegisterContext.Provider>
  );
}

Register.propTypes = {
  history: PropTypes.objectOf(Object).isRequired,
};

export default Register;
