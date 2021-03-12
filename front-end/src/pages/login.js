import React, { useState } from 'react';

import { saveState } from '../services/localStorage';

import api from '../services/api';

function Login() {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const integrationFunc = () => {
		api.listLogin(email, password)
			.then((response) => {
				saveState('token', response.data.token);
			}).catch((err) => {
				console.log(err);
			});
	}


	return (
		<div>
			<h1>Login</h1>
			<input type='text' placeholder='digite seu Email' onChange={(e) => setEmail(e.target.value)} />
			<input type='text' placeholder='digite seu Password' onChange={(e) => setPassword(e.target.value)} />
			<button onClick={integrationFunc}> Login </button>
		</div>
	);
};

export default Login;
