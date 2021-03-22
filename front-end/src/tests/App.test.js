import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { getByTestId, render, fireEvent, waitForElement } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

test('It will be validated that it is possible to access the home', () => {
  const { getByText } = renderWithRouter(<App />)
  const heading = getByText('Trybeer | Grupo 15');
  expect(heading).toBeInTheDocument();
});

test('It will be validated that the login screen contains the attributes described in the prototype', () => {
  const { getByTestId } = renderWithRouter(<App />)

  const email = getByTestId('email-input');
  const password = getByTestId('password-input');
  const login = getByTestId('signin-btn');
  const register = getByTestId('no-account-btn');
  expect(email).exist;
  expect(password).exist;
  expect(login).exist;
  expect(register).exist;
  expect(email.type).toBe('email');
  expect(password.type).toBe('password');
  expect(login.type).toBe('button');
  expect(register.type).toBe('button');
});

test('Será validado que não é possível fazer login com um email inválido', () => {
  const { getByTestId } = renderWithRouter(<App />)

  const email = getByTestId('email-input');
  const password = getByTestId('password-input');
  const login = getByTestId('signin-btn');

  fireEvent.change(email, { target: { value: 'rick.com' } })
  fireEvent.change(password, { target: { value: '123456789 ' } })
  expect(login.disabled).toBe(true);
});

test('Será validado que não é possível fazer login com uma senha em branco', () => {
  const { getByTestId } = renderWithRouter(<App />)
  const email = getByTestId('email-input');
  const password = getByTestId('password-input');
  const login = getByTestId('signin-btn');

  fireEvent.change(email, { target: { value: 'ricksousa@live.com' } });
  fireEvent.change(password, { target: { value: ' ' } });
  expect(login.disabled).toBe(true);
});

test('Será validado que não é possível fazer login com uma senha com menos de 6 caracteres', () => {
  const { getByTestId } = renderWithRouter(<App />)

  const email = getByTestId('email-input');
  const password = getByTestId('password-input');
  const login = getByTestId('signin-btn');

  fireEvent.change(email, { target: { value: 'ricksousa@live.com' } });
  fireEvent.change(password, { target: { value: '12345' } });
  expect(login.disabled).toBe(true);
});

test('Será validado que é possível fazer login com um cliente e ser redirecionado para tela de cliente', async () => {
  const { getByTestId, getByText } = renderWithRouter(<App />)

  const email = getByTestId('email-input');
  const password = getByTestId('password-input');
  const login = getByTestId('signin-btn');

  fireEvent.change(email, { target: { value: 'user@test.com' } });
  fireEvent.change(password, { target: { value: 'test123' } });
  await waitForElement(() => fireEvent.click(login));

  const skol = waitForElement(() => getByText('Skol Lata 250ml'));

  // const { pathname } = history.location;
  await expect(skol).toBe('/products');

});


// test('Is redirected to the Fav Pokémon page, by clicking on the Fav Pokémon link', () => {
//   const { queryAllByRole } = render(
//     <MemoryRouter>
//       <App />
//     </MemoryRouter>,
//   );
//   const link = queryAllByRole('link');
//   expect(link[2].pathname).toBe('/favorites');
// });

// test('app is redirected to the Not Found page when entering an unknown URL.', () => {
//   const { getByText } = render(
//     <MemoryRouter initialEntries={ ['/xablau'] }>
//       <App />
//     </MemoryRouter>,
//   );
//   const heading = getByText('Page requested not found');
//   expect(heading).toBeInTheDocument();
