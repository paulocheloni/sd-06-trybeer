import { login } from '../api';

const verifyEmailAndPassword = (email, password, setActiveBtn, setUser) => {
  const isEmailValid = email.match(/\S+@\S+\.\S+/);
  const isPasswordValid = password.match(/^[0-9a-zA-Z]{6,50}$/);

  if (isEmailValid && isPasswordValid) {
    setActiveBtn(true);
    setUser({ email, password });
  } else setActiveBtn(false);
};

const handleSubmit = (history, user) => {
  login(user)
    .then((response) => {
      const isAdmin = response.data.role === 'administrator';
      localStorage.setItem('token', response.data.token);

      if (isAdmin) history.push('admin/orders');
      else history.push('products');
    });
};

export {
  verifyEmailAndPassword,
  handleSubmit,
};
