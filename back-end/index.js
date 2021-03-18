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
const cors = require('cors');
const userRouter = require('./src/controllers/UserController');
const productsRouter = require('./src/controllers/ProductController')
const errorMiddleware = require('./src/middlewares/errorMiddleware');
const path = require('path')

const app = express();
const port = 3001;

app.use(cors()); 
app.use(bodyParser.json());

app.use('/user', userRouter);
app.use('/products', productsRouter)
app.use('/images', express.static(`${process.cwd()}/images`)); 

app.use(errorMiddleware);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
