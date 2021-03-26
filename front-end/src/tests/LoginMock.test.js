import React from 'react';
import { fireEvent } from '@testing-library/react';
import renderWithRouter from './RenderWithRouter';
import App from '../App';
import axios from 'axios';
import Login from '../pages/Login';

describe('1 - Teste tela de Login.', () => {
  jest.mock('axios');

  const fakeUsers = [
    { 
      name: 'testuser', 
      email: 'user@test.com',
      role: 'client',
    }
  ];
  const fakeToken = [
    {
      token: 'token',
    }
  ];
      
  it('Será testado que é gerado um Token ao clicar no button Entrar', async () => {
    const { getByTestId, history } = renderWithRouter(<App />);
    
    const emailInput = getByTestId('email-input');
    const passwordInput = getByTestId('password-input');
    const buttonEntrar = getByTestId('signin-btn');
    
    fireEvent.change(emailInput, { target: { value: 'user@test.com' } });
    fireEvent.change(passwordInput, { target: { value: 'test123' } });
    fireEvent.click(buttonEntrar);
    
    await axios.post.mockImplementationOnce((fakeUsers) => Promise.resolve());
    // expect(axios).toHaveBeenCalled;
    // await axios.post.mockResolvedValue({data: fakeUsers});
    
    
    
    expect(axios.post).toHaveBeenCalledTimes(1);

    // await expect(Login('react')).resolves.toEqual(history.push('/products'));
    // console.log(fakeData);
    


    // expect(window.localStorage.setItem).toHaveBeenCalledTimes(1);
    // await waitForElement(() => getByDisplayValue("Richard"));

    
    // expect(window.localStorage.setItem).toHaveBeenCalledWith(
    //   "name",
    //   '"Richard"'
    // );
  });
});


// beforeEach(() => {
  //   Object.defineProperty(window, "localStorage", {
  //     value: {
  //       getItem: jest.fn(() => null),
  //       setItem: jest.fn(() => null)
  //     },
  //     writable: true
  //   });
  // });