import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import RegisterContext from '../context/RegisterContext';
import FormRegister from '../components/pageRegister/FormRegister';

function Register({ history }) {
  const [newUser, setUser] = useState({ name: '', email: '', senha: '', tipo: 'client' });
  const [valid, setValid] = useState('true');
  useEffect(() => {
    const isValid = () => {
      const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(newUser.email);
      const validNome = /^[a-záàâãéèêíïóôõöúçñ ]+$/i.test(newUser.name);
      const six = 6;
      const doze = 12;
      const tam = newUser.name.length >= doze;
      if (validNome && regexEmail && newUser.senha.length >= six && tam) {
        setValid(false);
      } else {
        setValid(true);
      }
    };
    isValid();
  }, [newUser.senha, newUser.name, newUser.email]);

  const handleChange = ({ target }) => {
    setUser({ ...newUser, [target.name]: target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (newUser.tipo === 'admin') {
      history.push('/admin/oders');
    } else {
      history.push('/products');
    }
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
  history: PropTypes.func.isRequired,
};

export default Register;
