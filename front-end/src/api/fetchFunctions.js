const options = (method, body = null) => ({
  method,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: body ? JSON.stringify(body) : undefined,
});

const urlBase = 'http://localhost:3001';

const get = (endpoint, authorization) => fetch(`${urlBase}/${endpoint}`,
  {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization,
    },
  },
)
  .then((e) => e.json())
  .catch((e) => e.message);

const post = async (endpoint, body) => fetch(`${urlBase}/${endpoint}`,
  options('POST', body))
  .then((e) => e.json())
  .catch((e) => console.log(e.message));

const put = async (endpoint, body) => fetch(`${urlBase}/${endpoint}`,
  options('PUT', body))
  .then((e) => e.json())
  .catch((e) => e.message);

module.exports = { get, post, put };
