import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import renderWithRouter from './RenderWithRouter';
import App from '../App';

describe('1 - Teste tela de Login.', () => {
  // const fakeAxios = {
  //   get: jest.fn(() => Promise.resolve({ data: "Token" }))
  // };

  // beforeEach(() => {
  //   Object.defineProperty(window, "localStorage", {
  //     value: {
  //       getItem: jest.fn(() => null),
  //       setItem: jest.fn(() => null)
  //     },
  //     writable: true
  //   });
  // });

  it('Será testado que a página de Login é renderizada.', () => {
    // Acessar elemnetos da tela
    const { getByText, history } = renderWithRouter(<App />);
    const { pathname } = history.location;
    const emailLabelText = getByText(/Email/i);
    const passwordText = getByText(/Senha/i)
        
    expect(pathname).toBe('/login');
    expect(emailLabelText).toBeInTheDocument();
    expect(passwordText).toBeInTheDocument();
  });

  it('Será testado que o input "Email" existe.', () => {
    const { getByRole } = renderWithRouter(<App />);

    const emailInput = getByRole('textbox', { name: 'Email' });

    expect(emailInput).toBeInTheDocument();
  });

  it('Será testado que o input "Senha" existe.', () => {
    const { getByLabelText } = renderWithRouter(<App />);

    const passwordInput = getByLabelText('Senha');

    expect(passwordInput).toBeInTheDocument();
  });

  it('Será testado que o button "Entrar" existe.', () => {
    const { getByRole } = renderWithRouter(<App />);

    const buttonEntrar = getByRole('button', { name: 'Entrar' });

    expect(buttonEntrar).toBeInTheDocument();
  });

  it('Será testado que o link "Ainda não tenho conta" existe.', () => {
    const { getByRole } = renderWithRouter(<App />);

    const linkDeRegistro = getByRole('link', { name: 'Ainda não tenho conta' });

    expect(linkDeRegistro).toBeInTheDocument();
  });

  it('Será testado que é possível escrever nos inputs "Email" e "Senha".', () => {
    const { getByTestId } = renderWithRouter(<App />);
  
    const emailInput = getByTestId('email-input');
    const passwordInput = getByTestId('password-input');
  
    fireEvent.change(emailInput, { target: { value: 'tryber@trybe.com.br' } });
    fireEvent.change(passwordInput, { target: { value: '123456' } });
  
    expect(emailInput.value).toBe('tryber@trybe.com.br');
    expect(passwordInput.value).toBe('123456');
  });

  it('Será testado que o botão Entrar deve estar desabilitado se o email for inválido;', () => {
    const { getByTestId } = renderWithRouter(<App />);
    const emailInput = getByTestId('email-input');
    const passwordInput = getByTestId('password-input');
    const buttonEntrar = getByTestId('signin-btn');
    
    expect(buttonEntrar).toBeDisabled();

    fireEvent.change(emailInput, { target: { value: 'teste@teste' } });
    fireEvent.change(passwordInput, { target: { value: '123456' } });

    expect(buttonEntrar).toBeDisabled();

    fireEvent.change(emailInput, { target: { value: 'testeteste.com' } });
    fireEvent.change(passwordInput, { target: { value: '123456' } });

    expect(buttonEntrar).toBeDisabled();
  });

  it('Será testado que o botão Entrar deve estar desabilitado se a senha for inválida;', () => {
    const { getByTestId } = renderWithRouter(<App />);
    const emailInput = getByTestId('email-input');
    const passwordInput = getByTestId('password-input');
    const buttonEntrar = getByTestId('signin-btn');
    
    expect(buttonEntrar).toBeDisabled();

    fireEvent.change(emailInput, { target: { value: 'teste@teste.com' } });
    fireEvent.change(passwordInput, { target: { value: '12345' } });

    expect(buttonEntrar).toBeDisabled();
  });

  it('Será testado que o botão Entrar deve estar habilitado se o email e a senha forem válidos.', () => {
    const { getByTestId } = renderWithRouter(<App />);
    const emailInput = getByTestId('email-input');
    const passwordInput = getByTestId('password-input');
    const buttonEntrar = getByTestId('signin-btn');

    fireEvent.change(emailInput, { target: { value: 'teste@teste.com' } });
    fireEvent.change(passwordInput, { target: { value: '123456' } });

    expect(buttonEntrar).toBeEnabled();
  });

  it('Será testado que é gerado um Token ao clicar no button Entrar', async () => {
    const { getByTestId } = renderWithRouter (<App />);
    const emailInput = getByTestId('email-input');
    const passwordInput = getByTestId('password-input');
    const buttonEntrar = getByTestId('signin-btn');

    fireEvent.change(emailInput, { target: { value: 'teste@teste.com' } });
    fireEvent.change(passwordInput, { target: { value: '123456' } });
    fireEvent.click(buttonEntrar);

    // expect(window.localStorage.setItem).toHaveBeenCalledTimes(1);
    // const token = storageMock().getItem('token');
    // console.log(token);
    // expect(token).toBe('my Token');
  });
});
