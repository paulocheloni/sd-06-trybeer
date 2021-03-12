import * as yup from 'yup';

const minPassword = 6;

const loginSchema = yup.object().shape({
  email: yup
    .string('tem que ser string').email('não é email').required('campo obrigatório'),
  password: yup.string()
    .min(minPassword, 'senha com no minimo 6 caracteres').required('campo obrigatório'),
});

export default loginSchema;
