import axios from 'axios';

const userValidation = (user, setUser, setEnableButton) => {
  const regexValidation = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{3,6}$/;
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

axios(user, {
  method: 'POST',
  url: '/login',
  data: { user }
});

exports = {
  userValidation,
  axios
};
