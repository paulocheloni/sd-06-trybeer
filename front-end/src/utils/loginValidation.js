const verifyEmailAndPassword = (email, password, changeDisabled) => {
  const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
  const emailFormat = regex.test(email);
  const passwordMinLength = 6;
  if (password && password.length >= passwordMinLength && emailFormat) {
    changeDisabled(false);
  } else {
    changeDisabled(true);
  }
};

export default verifyEmailAndPassword;
