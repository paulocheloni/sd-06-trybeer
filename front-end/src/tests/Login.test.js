import React from 'react'
import userEvent from '@testing-library/user-event';
import {cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderWithRouter from './utils/renderWithRouter'
import App from '../App'
import { act } from 'react-dom/test-utils';
import getStorageKey from './storage/getStorageKey'

afterEach(cleanup)

test('A rota para esta página deve ser \'/\'', () => {
  const { history } = renderWithRouter(<App />);
  expect(history.location.pathname).toBe('/');
});

test('Crie um local para que o usuário insira seu email e senha', () => {
    const {getByTestId, getByText} = renderWithRouter(<App />);

  const email = getByTestId('email-input');
  const senha = getByTestId('password-input');

  expect(email).toBeInTheDocument();
  expect(senha).toBeInTheDocument();
});

test('Crie um botão com o texto \'Entrar\'', () => {
  const {getByText} = renderWithRouter(<App />);

  const button = getByText(/Entrar/i);
  expect(button).toBeInTheDocument();
});


test('Realize as seguintes verificações nos campos de email, senha e botão:', async () => {
  const {findByRole, getByTestId} = renderWithRouter(<App />);


  let signinButton = await findByRole('button', 'Entrar')
  expect(signinButton).toBeDisabled();

  const email = getByTestId('email-input');
  const senha = getByTestId('password-input');
    userEvent.type(email, 'email');
    userEvent.type(senha, '123456');

  signinButton = await findByRole('button', 'Entrar')
  expect(signinButton).toBeDisabled();

    userEvent.type(email, 'email@com@');
    userEvent.type(senha, '123456');
  signinButton = await findByRole('button', 'Entrar')
  expect(signinButton).toBeDisabled();
  

    userEvent.type(email, 'emailcom@');
    userEvent.type(senha, '123456');
  signinButton = await findByRole('button', 'Entrar')
  expect(signinButton).toBeDisabled();

    userEvent.type(email, 'alguem@email.com');
    userEvent.type(senha, '23456');
  signinButton = await findByRole('button', 'Entrar')
  expect(signinButton).toBeDisabled();
  

    userEvent.type(email, 'alguem@email.');
    userEvent.type(senha, '123456');
  signinButton = await findByRole('button', 'Entrar')
  expect(signinButton).toBeDisabled()
    userEvent.type(email, 'alguem@email.com');
    userEvent.type(senha, '123456');

  signinButton = await findByRole('button', 'Entrar')
  expect(signinButton).toBeEnabled()

});

test('Salve o email no estado da aplicação, com a chave email, assim que o usuário logar.', async () => {
  const {history, getByTestId, findByText} = renderWithRouter(<App />);
  const email = getByTestId('email-input');
  const senha = getByTestId('password-input');
  
  userEvent.type(email, 'user@test.com');
  userEvent.type(senha, 'test123');

  const button = await findByText(/Entrar/i);

  expect(button).toBeEnabled()

  userEvent.click(button);
  
  await findByText(/Trybeer/i)



});

test('A rota deve ser mudada para \'/produtos\'', async () => {
  const { history, getByTestId, findByText, waitFor } = renderWithRouter(<App />);
  const email = getByTestId('email-input');
  const senha = getByTestId('password-input');
  userEvent.type(email, 'user@test.com');
  userEvent.type(senha, 'test123');
  const button = await findByText(/Entrar/i);
  userEvent.click(button);
  await findByText(/Trybeer/i)
  expect(history.location.pathname).toBe('/products')
    
      

  // expect(history.location.pathname).toBeOneOf(['/produtos', '/admin/orders']);
});
test('A rota deve ser mudada para \'/admin/orders\' após o clique no botão', async () => {
  const { history, getByTestId, findByText } = renderWithRouter(<App />);
  const email = getByTestId('email-input');
  const senha = getByTestId('password-input');
  userEvent.type(email, 'tryber@trybe.com.br');
  userEvent.type(senha, '123456');
  const button = await findByText(/Entrar/i);
  userEvent.click(button);
  await findByText(/Trybeer/i)

  expect(history.location.pathname).toBe('/admin/orders')
    
      

  // expect(history.location.pathname).toBeOneOf(['/produtos', '/admin/orders']);
});

test('testa a rota que deverá ser renderizada para o usuario administrador', async () => {

    const { history, getByTestId, findByText } = renderWithRouter(<App />);
    const email = getByTestId('email-input');
    const senha = getByTestId('password-input');
    userEvent.type(email, 'tryber@trybe.com.br');
    userEvent.type(senha, '123456');
    const button = await findByText(/Entrar/i);
    userEvent.click(button);
    
    await findByText(/Trybeer/i)
    const user = getStorageKey('user')
    expect(user.role).toBe('administrator')
    
    expect(history.location.pathname).toBe('/admin/orders')

    
})

test('testa a rota que deverá ser renderizada para o usuario cliente', async () => {

  const { history, getByTestId, findByText } = renderWithRouter(<App />);
  const email = getByTestId('email-input');
  const senha = getByTestId('password-input');
  userEvent.type(email, 'user@test.com');
  userEvent.type(senha, 'test123');
  const button = await findByText(/Entrar/i);
  userEvent.click(button);
  
  await findByText(/Trybeer/i)
  const user = getStorageKey('user')
  expect(user.role).toBe('client')
  
  expect(history.location.pathname).toBe('/products')

  
})




