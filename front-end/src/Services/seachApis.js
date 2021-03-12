import axios from 'axios';

export const registered = async (email, password) => {
  const user = await axios({
    method: 'post',
    url: 'http://localhost:3000/login',
    data: {
      email,
      password,
    },
  }).then((res) => res.data.user)
    .catch((err) => {
      console.error(`ops! ocorreu um erro${err}`);
    });

  return user;
};
