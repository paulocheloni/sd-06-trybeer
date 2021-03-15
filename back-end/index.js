const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userController = require('./controller/usercontroller');
const registerController = require('./controller/registerController');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/login', userController);
app.use('/register', registerController);

const port = 3001;

//  app.get('/', (req, res) => res.send('esta comunicando'));
app.listen(port, () => console.log(`app listen on port ${port}`));