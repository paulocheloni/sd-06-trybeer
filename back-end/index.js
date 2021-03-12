/**
 * 1 - fazer estrutura básica do index
 * 2 - fazer estrutura básica do connection
 * 3 - criar rota de login (controller, service e model)
 * 4 - criar middleware de verificação de email e senha
 * 5 - implementar geração de token
 * 6 - retornar o token para o usuário
 */
const express = require('express');
const bodyParser = require('body-parser');
const routerLogin = require('./src/controllers/LoginController');
const errorMiddleware = require('./src/middlewares/errorMiddleware');

const app = express();
const port = 3001;

app.use(bodyParser.json());

app.use('/login', routerLogin);
app.use(errorMiddleware);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));