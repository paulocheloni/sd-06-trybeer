import { getUserByEmail } from './api';

export const userValidation = (user, setUser, setEnableButton) => {
  const regexValidation = /\S+@\S+\.\S+/;
  const minimumCharacters = 6;
  const password = document.getElementById('password-input').value;
  const email = document.getElementById('email-input').value;

  if (regexValidation.test(email) && password.length >= minimumCharacters) {
    setUser({ ...user, email, password });

    setEnableButton(false);
  } else {
    setUser({ email: '', password: '' });

    setEnableButton(true);
  }
};

export const handleUserNotRegistered = (history) => history.push('/register');

export const routeByRole = (role, history) => {
  switch (role) {
  case 'administrator': history.push('/admin/orders');
    break;
  case 'client': history.push('/products');
    break;
  default:
    break;
  }
};

export const redirectPath = async (history, user) => {
  const fetchedUser = await getUserByEmail(user);
  routeByRole(fetchedUser.role, history);
};
