const express = require('express');
const cors = require('cors');
const LoginController = require('./src/controllers/LoginController');
const RegisterController = require('./src/controllers/RegisterController');
const ProfileController = require('./src/controllers/ProfileController');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

app.use(express.json());

app.use('/login', LoginController);

app.use('/register', RegisterController);

app.use('/profile', ProfileController);

app.listen(port, () => console.log(`Running at ${port}`));
