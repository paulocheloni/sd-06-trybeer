import React from 'react';
import { fireEvent, waitForElement } from '@testing-library/react';
import renderWithRouter from './RenderWithRouter';
import App from '../App';
import axios from 'axios';
import Login from '../pages/Login';

jest.mock('axios');

const fakeUsers = 
  { 
    name: 'testuser', 
    email: 'user@test.com',
    role: 'client',
  };
const fakeToken = 
  {
    token: 'token',
  };


describe('1 - Teste tela de Login.', () => {
  // beforeEach(() => {
  //   Object.defineProperty(window, "localStorage", {
  //     value: {
  //       getItem: jest.fn(() => null),
  //       setItem: jest.fn(() => null)
  //     },
  //     writable: true
  //   });
  // });
        
  it('Será testado que é gerado um Token ao clicar no button Entrar', async () => {
    axios.post.mockReturnValue([fakeUsers, fakeToken]);
          
    const { getByTestId, history, getByText } = renderWithRouter(<App />);
    
    const emailInput = getByTestId('email-input');
    const passwordInput = getByTestId('password-input');
    const buttonEntrar = getByTestId('signin-btn');
    
    fireEvent.change(emailInput, { target: { value: 'user@test.com' } });
    fireEvent.change(passwordInput, { target: { value: 'test123' } });
    fireEvent.click(buttonEntrar);
    
    expect(window.localStorage.setItem).toHaveBeenCalledTimes(1);

  });
});
