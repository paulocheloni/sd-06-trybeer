import userApi from '../services/api.user';
import yupSchemas from './yupSchemas';
import handleUser from './handleUser';

const handleSubmit = async (e, login, history, setToken) => {
  e.preventDefault();

  const valid = await yupSchemas.login.isValid(login);
  if (valid) {
    const newUser = await userApi(login);
    handleUser(newUser, history, setToken);
  }
};

export default handleSubmit;
