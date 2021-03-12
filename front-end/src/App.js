import React, { useState } from 'react';
import { saveState } from './services/localStorage';
import history from './services/history';
import api from './services/api';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const integrationFunc = () => { 
    api.listLogin(email, password)
    .then((response) => {
      saveState('user', response.data);
      if (response.data.role === 'administrator') return history.push('/Admin');
      if (response.data.role === 'client') return history.push('/Cliente');
    }).catch((err) => {
      console.log(err.response.data);
    });
  }

  return (
    <div className="App">
      <h1>Login</h1>
      <input type='text' placeholder='digite seu Email' onChange={ (e) => setEmail(e.target.value) } />
      <input type='text' placeholder='digite seu Password' onChange={ (e) => setPassword(e.target.value) } />
      <button onClick={ integrationFunc }> Login </button>
    </div>
  );
}

export default App;
