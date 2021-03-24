import React from 'react'
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import renderWithRouter from './renderWithRouter';
import App from '../../App';
import { fireEvent, screen, waitForElement } from '@testing-library/react';


const signinAsClient = async () => {
  const { history, getByTestId, findByText, getByText } = renderWithRouter(<App />);

  const email = getByTestId('email-input');
  const senha = getByTestId('password-input');
  const button = getByTestId('signin-btn');

  userEvent.type(email, 'user@test.com');
  console.log(email.value)
  userEvent.type(senha, 'test123');
  console.log(senha.value)
  console.log(button.innerHTML)
  fireEvent.click(button);
  button.simulate('click')
  // await waitForElement(() => fireEvent.click(button))
  // await waitForElement(() => userEvent.click(button))
  // await waitForElement(() => screen.findByText(/Trybeer/i))

  console.log(history.location.pathname)
  expect(history.location.pathname).toBe('/products')

}

const signinAsAdministrator = async () => {
  const { getByTestId, findByText } = renderWithRouter(<App />);
  const email = getByTestId('email-input');
  const senha = getByTestId('password-input');
  userEvent.type(email, 'tryber@trybe.com');
  userEvent.type(senha, '123456');
  const button = await findByText(/Entrar/i);
  userEvent.click(button);
}

export {
  signinAsClient,
  signinAsAdministrator
}
  
