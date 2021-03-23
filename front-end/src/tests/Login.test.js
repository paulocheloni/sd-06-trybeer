import React from 'react'
import userEvent from '@testing-library/user-event';
import {fireEvent, screen, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderWithRouter from './utils/renderWithRouter'
import App from '../App'

test('A rota para esta página deve ser \'/\'', () => {
  const { history } = renderWithRouter(<App />);
  expect(history.location.pathname).toBe('/');
});

test('Crie um local para que o usuário insira seu email e senha', () => {
  renderWithRouter(<App />, '/');
  const email = screen.getByTestId('email-input');
  const senha = screen.getByTestId('password-input');

  expect(email).toBeInTheDocument();
  expect(senha).toBeInTheDocument();
});

test('Crie um botão com o texto \'Entrar\'', () => {
  renderWithRouter(<App />, '/');

  const button = screen.getByText(/Entrar/i);
  expect(button).toBeInTheDocument();
});


test('Realize as seguintes verificações nos campos de email, senha e botão:', () => {
  renderWithRouter(<App />);

  const button = screen.getByText(/Entrar/i);
  expect(button).toBeDisabled();

  const email = screen.getByTestId('email-input');
  const senha = screen.getByTestId('password-input');
  
  

  userEvent.type(email, 'email');
  userEvent.type(senha, '123456');
  expect(button).toBeDisabled();

  userEvent.type(email, 'email@com@');
  userEvent.type(senha, '123456');
  expect(button).toBeDisabled();
  

  userEvent.type(email, 'emailcom@');
  userEvent.type(senha, '123456');
  expect(button).toBeDisabled();

  userEvent.type(email, 'alguem@email.com');
  userEvent.type(senha, '23456');
  expect(button).toBeDisabled();

  userEvent.type(email, 'alguem@email.');
  userEvent.type(senha, '123456');
  expect(button).toBeDisabled();

  userEvent.type(email, 'alguem@email.com');
  userEvent.type(senha, '123456');
  expect(button).toBeEnabled();
});

test('Salve o email no estado da aplicação, com a chave email, assim que o usuário logar.', async () => {
  renderWithRouter(<App />);
  const email = screen.getByTestId('email-input');
  const senha = screen.getByTestId('password-input');
  const button = screen.getByText(/Entrar/i);
  userEvent.type(email, 'alguem@email.com');
  userEvent.type(senha, '123456');
  fireEvent.click(button);
  await screen.getByText(/Produtos/)
  const userLocalStorage = JSON.parse(localStorage.getItem('user'));

  expect(userLocalStorage.email).toBe('alguem@email.com');
});

test('A rota deve ser mudada para \'/produtos\' ou \'/admin/orders\' após o clique no botão.', () => {
  const { history } = renderWithRouter(<App />);
  const email = screen.getByTestId('email-input');
  const senha = screen.getByTestId('password-input');
  const button = screen.getByText(/Entrar/i);

  userEvent.type(email, 'alguem@email.com');
  userEvent.type(senha, '123456');
  fireEvent.click(button);

  // expect(history.location.pathname).toBeOneOf(['/produtos', '/admin/orders']);
});

