import axios from 'axios';

const user = async (payload) => {
  try {
    const localhost = process.env.HOSTNAME || 'localhost';
    const endpoint = (payload.name)
      ? 'user/register'
      : 'login';
    const method = {
      method: 'post',
      url: `http://${localhost}:3001/${endpoint}`,
      data: payload,
    };
    const result = await axios(method);
    console.log(result);
    if (result.data) return result.data;
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
      return error.response.data;
    }
    if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
    console.log(error.config);
  }
};

export default user;
