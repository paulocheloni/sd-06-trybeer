const options = (method, body = null) => ({
  method,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: body ? JSON.stringify(body) : undefined,
});

const urlBase = 'http://localhost:3001';

const get = (endpoint) => fetch(`${urlBase}/${endpoint}`)
  .then((e) => e.json());

const post = async (endpoint, user) => fetch(`${urlBase}/${endpoint}`,
  options('POST', user))
  .then((e) => e.json())
  .catch((e) => console.log(e.message));

module.exports = { get, post };
