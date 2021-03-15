const messages = {
    erroInterno: {
        message: 'Erro Interno!',
    },
    dadosInvalidos: {
        message: 'Login ou Senha Invalidos',
    },
};

const status = {
    sucess: 200, 
    error: 500,
    unauthorized: 401,
};

module.exports = {
    messages,
    status,
  };