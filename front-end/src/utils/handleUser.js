const handleUser = (user, history, callback) => {
  if (user.role) {
    callback(user);
    if (user.role === 'administrator') history.push('/admin/orders');
    if (user.role === 'client') history.push('/products');
  }
  if (user.code) {
    history.push({
      pathname: '/error',
      state: { ...user } });
  }
};

export default handleUser;
