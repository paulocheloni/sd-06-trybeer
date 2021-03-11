import React, { useState, useEffect } from 'react';
import api from './services/api';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  const integrationFunc = () => { 
    api.listLogin(email, password)
    .then((response) => setToken(JSON.stringify(response.data.token))
    ).catch((err) => {
      console.log(err);
    });
  }

  return (
    <div className="App">
      <h1>Login</h1>
      <input type='text' placeholder='digite seu Email' onChange={ (e) => setEmail(e.target.value) } />
      <input type='text' placeholder='digite seu Password' onChange={ (e) => setPassword(e.target.value) } />
      <button onClick={integrationFunc}> Login </button>
      <p>{`${token}`}</p>
    </div>
  );
}

export default App;
