// const path = 'http://localhost:3001/login';

import axios from "axios";

// async function fetchUser () {
//   await fetch(path).then(
//     (r) => console.log('Services getUser', r.json())
//   );
// };

// const fetchUser = async (email, password) => {
//   return fetch('http://localhost:3001/login/', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//       },
//       body: JSON.stringify({ email, password })
//     });
// }

const fetchUser = async (email, password) => axios
  .post('http://localhost:3001/login/', {email, password})
  .then((data) => {
    // console.log('aqui é dentro do getUser', data.data)
    return data;
  })

export default fetchUser;