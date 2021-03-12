const path = 'http://localhost:3001/login';

async function fetchUser () {
  await fetch(path).then(
    r => r.json()
  );
};

export default fetchUser;