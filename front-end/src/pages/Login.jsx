import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import LoginContext from '../context/LoginContext';
import FormLogin from '../components/pageLogin/FormLogin';
import visibilityBtnLogin from '../utils/visibilityBtnLogin';
import api from '../services/api';

function Login({ history }) {
  const [user, setUser] = useState({ email: '', password: '' });
  const [valid, setValid] = useState(true);
  const [errMsg, setErrMsg] = useState('');
  const [displayErr, setDisplayErr] = useState(false);

  useEffect(() => {
    visibilityBtnLogin(user, setValid);
  }, [user]);

  const handleChange = ({ target }) => {
    setUser({ ...user, [target.name]: target.value });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const loginValidate = await api.generateToken(user.email, user.password);
    const { token, role } = loginValidate.response;
    if (loginValidate.result) {
      setErrMsg(false);
      console.log('successfully logged in');
      if (role === 'administrator') history.push('/admin/orders');
      else history.push('/products');
      localStorage.setItem('user', JSON.stringify({ email: user.email, token }));
    } else {
      console.log(loginValidate.response);
      setDisplayErr(true);
      setErrMsg(loginValidate.response.message);
    }
  };

  return (
    <LoginContext.Provider
      value={ {
        dataUser: user,
        isDisabled: valid,
        handleIputs: handleChange,
        handleButton: handleClick,
        router: history,
        messageError: errMsg,
        displayError: displayErr,
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
