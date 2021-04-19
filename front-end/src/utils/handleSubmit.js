import userApi from '../services/api.user';

const handleSubmit = async ({ action, login, setToken, history }) => {
  const user = await userApi(action, login);
  if (user.code) {
    history.push({
      pathname: '/error',
      state: { ...user } });
  }
  if (user.role) {
    setToken(user);
    if (user.role === 'administrator') history.push('/admin/orders');
    if (user.role === 'client') history.push('/products');
  }
};

export default handleSubmit;
