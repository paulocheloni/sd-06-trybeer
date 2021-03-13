const express = require('express');

const app = express();

require('dotenv').config();

const PORT = process.env.PORT || 3001;

const cors = require('cors');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');
const UserService = require('./Services/userService');
const Utils = require('./Utils');

app.use(bodyParser.json());
app.use(cors());

app.post('/login', rescue(UserService.loginUser));

app.post('/register', 
  rescue(UserService.validateEmail), 
  rescue(UserService.registerNewUser));

app.put('/profile/edit', 
  rescue(Utils.verifyToken), 
  rescue(UserService.updateUser));

app.use((err, req, res, _next) => {
  const codeStatus = (err.codeStatus) ? err.codeStatus : 500;
  res.status(codeStatus).json({ message: err.message });
});

app.listen(PORT);
