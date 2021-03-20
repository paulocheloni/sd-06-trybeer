import * as yup from 'yup';

const passwordLength = 6;

const login = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(passwordLength).required(),
});

const register = yup.object().shape({
  name: yup.string().matches(/^[a-z ,.'-]{12,}$/i).required(),
  email: yup.string().email().required(),
  password: yup.string().min(passwordLength).required(),
});

export default { login, register };
