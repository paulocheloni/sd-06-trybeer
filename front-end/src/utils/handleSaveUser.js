import userApi from '../services/api.user';
import yupSchemas from './yupSchemas';

const handleSaveUser = async (payload, callback, history) => {
  const valid = await yupSchemas.update.isValid({ name: payload.newName });
  if (valid) {
    const updateUser = await userApi('update', payload);
    if (updateUser.code) {
      history.push({
        pathname: '/error',
        state: { ...updateUser } });
    }
    if (updateUser.success) {
      const newLogin = {
        name: payload.newName,
        email: payload.email,
        token: payload.token };
      callback(newLogin);
      return updateUser;
    }
  }
};

export default handleSaveUser;
