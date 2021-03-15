import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import LoginContext from '../context/LoginContext';
import FormLogin from '../components/pageLogin/FormLogin';
import visibilityBtnLogin from '../utils/visibilityBtnLogin';
import api from '../services/api';

function Login({ history }) {
  const [user, setUser] = useState({ email: '', password: '' });
  const [valid, setValid] = useState(true);
  useEffect(() => {
    visibilityBtnLogin(user, setValid);
  }, [user]);

  const handleChange = ({ target }) => {
    setUser({ ...user, [target.name]: target.value });
  };

  const handleClick = async (e) => {
    console.log(user.email);
    e.preventDefault();

    const loginValidate = await api.generateToken(user.email, user.password);
    console.log(loginValidate);
    const { token, role } = loginValidate;

    if (role === 'admin') {
      history.push('/admin/orders');
    } else { history.push('/products'); }
    localStorage.setItem('user', JSON.stringify(user.email, token));
  };
  return (
    <LoginContext.Provider
      value={ {
        dataUser: user,
        isDisabled: valid,
        handleIputs: handleChange,
        handleButton: handleClick,
        router: history,
      } }
    >
      <div>
        <FormLogin />
      </div>
    </LoginContext.Provider>
  );
}

Login.propTypes = {
  history: PropTypes.objectOf(Object).isRequired,
};

export default Login;
