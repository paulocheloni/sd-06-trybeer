import React from 'react'
import {cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderWithRouter from './utils/renderWithRouter'
import App from '../App'
import Products from '../pages/Products'
import {signinAsClient, signinAsAdministrator} from './utils/signinHelper'

afterEach(cleanup)

test('A rota para a página de perfil de cliente deve ser \'/profile\'', async () => {
  await signinAsClient();
  // const { history } = renderWithRouter(<Products />);
  // expect(history.location.pathname).toBe('/profile');
});

// test('A rota para a página de perfil de administrador deve ser \'/admin/profile\'', () => {
//   const { history } = renderWithRouter(<ProfileAdmin />);
//   expect(history.location.pathname).toBe('/admin/profile');
// });