const path = 'http://localhost:3001/login';

async function fetchUser (email) {
  await fetch(path, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email})
  });
};

export default fetchUser;