import userApi from '../services/api.user';
import yupSchemas from './yupSchemas';

const handleSaveUser = async (payload, setToken, history) => {
  const valid = await yupSchemas.update.isValid({ name: payload.name });
  if (valid) {
    const updateUser = await userApi('update', payload);
    if (updateUser.code) {
      history.push({
        pathname: '/error',
        state: { ...updateUser } });
    }
    if (updateUser.success) {
      setToken((prevToken) => ({ ...prevToken, name: payload.name }));
    }
    return updateUser;
  }
};

export default handleSaveUser;
