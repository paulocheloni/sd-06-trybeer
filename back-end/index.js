const express = require('express');
const cors = require('cors');
<<<<<<< HEAD
const UserController = require('./src/controller/UsersControler');
const ProfileController = require('./src/controller/ProfileController');
=======
const LoginController = require('./src/controller/LoginControler');
const UsersController = require('./src/controller/UsersController');
>>>>>>> b04a57646c8acd03b1533cc996acc137afb3ec2c

const app = express();

const PORT = 3001;

app.use(express.json());
app.use(cors());

app.use('/login', LoginController);
app.use('/register', UsersController);

app.use('/profile', ProfileController);

app.use((err, _req, res, _next) => {
  res.status(err.status || 500).json(err.message);
});

app.listen(PORT, console.log(`Experando Requisições na porta ${PORT}`));
