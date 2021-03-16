import API from '../axios';

export const post = (route, body = {}) => {
  const response = API.post(route, body)
    .then((response) => response.data)
    .catch((error) => error.response.data);

  return response;
}

export const update = (route, body = {}) => {
  const response = API.put(route)
    .then((response) => response.data)
    .catch((error) => error.response.data);

  return response;
}

export const get = (route) => {
  const response = API.get(route)
    .then((response) => response.data)
    .catch((error) => error.response.data);

  return response;
}

export const remove = (route, body = {}) => {
  const response = API.delete(route, body)
    .then((response) => response.data)
    .catch((error) => error.response.data);

  return response;
}
