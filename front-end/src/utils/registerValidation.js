const verifyNameEmailAndPassword = (name, email, password, changeDisabled) => {
  const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
  const nameRegex = /^[a-zA-Z]+(([a-zA-Z ])?[a-zA-Z]*)*$/;
  const emailFormat = emailRegex.test(email);
  const nameFormat = nameRegex.test(name);
  const nameMinLength = 12;
  const passwordMinLength = 6;
  if (name.length >= nameMinLength
    && nameFormat
    && password && password.length >= passwordMinLength
    && emailFormat) {
    changeDisabled(false);
  } else {
    changeDisabled(true);
  }
};

export default verifyNameEmailAndPassword;
