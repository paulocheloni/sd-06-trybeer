import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../state/actions';

const Form = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [seePassword, setSeePassword] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState();
  const [passwordIsValid, setPasswordIsValid] = useState();

  const validColor = 'text-green-500';

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const dispatch = useDispatch();

  const login = useCallback(
    ({ email, password }) => dispatch(actions.postLogin({ email, password })), [dispatch],
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    login(form);
  };

  return (
    <form
      className="flex flex-col mt-10"
      onSubmit={ (event) => handleSubmit(event) }
    >
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-2">
          <label htmlFor="email-ipt" className="flex flex-col space-y-2">
            <p>Email*</p>
            <input
              id="email-ipt"
              type="text"
              name="email"
              data-testid="email-input"
              value={ form.email }
              onChange={ (target) => handleChange(target) }
              className="border rounded-md p-2 focus:outline-none
              focus:border-secondary-dark"
              pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
              placeholder="Enter your email..."
              required
              onInvalid={ () => setEmailIsValid(false) }
              onKeyUp={ () => setEmailIsValid(true) }
            />
          </label>
          <p className={ !emailIsValid ? 'text-xs text-red-500' : 'hidden' }>
            Email should be like name@domain.com
          </p>
        </div>
        <label htmlFor="password-ipt" className="flex flex-col space-y-2">
          <p>Secret*</p>
          <div className="flex space-x-2 items-center">
            <input
              id="password-ipt"
              data-testid="password-input"
              type={ !seePassword ? 'password' : 'text' }
              name="password"
              value={ form.password }
              onChange={ (target) => handleChange(target) }
              className="border rounded-md p-2 focus:outline-none
              focus:border-secondary-dark"
              placeholder="Enter your password..."
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,}$"
              required
              onInvalid={ () => setPasswordIsValid(false) }
              onKeyUp={ () => setPasswordIsValid(true) }
            />
            <button
              type="button"
              onClick={ () => setSeePassword((prev) => !prev) }
            >
              Icone
            </button>
          </div>
        </label>
        <ul className={ !passwordIsValid ? 'text-xs text-red-500' : 'hidden' }>
          <li
            className={ /[A-Za-z\d@$!%*?&]{8,}/.test(form.password)
              ? validColor : '' }
          >
            Minimun of 8 characters
          </li>
          <li
            className={ /(?=.*[A-Z])/.test(form.password) ? validColor : '' }
          >
            At least 1 uppercase letter
          </li>
          <li
            className={ /(?=.*[a-z])/.test(form.password) ? validColor : '' }
          >
            At least 1 lowercase letter
          </li>
          <li
            className={ /(?=.*\d)/.test(form.password) ? validColor : '' }
          >
            At least 1 number
          </li>
          <li
            className={ /(?=.*[@$!%*?&])/.test(form.password) ? validColor : '' }
          >
            At least 1 special character
          </li>
        </ul>
      </div>
      <div className="w-full mt-10 flex flex-col space-y-2">
        <input
          data-testid="signin-btn"
          className="rounded-md w-full p-2 disabled:text-opacity-90 bg-secondary"
          type="submit"
          value="Sign In"
        />
        <Link
          className="rounded-md border-secondary border w-full p-2 text-center"
          to="/register"
        >
          Sign Up
        </Link>
        <p
          className="text-xs"
          data-testid="no-account-btn"
        >
          Forgot your passsword?
        </p>
      </div>
    </form>
  );
};

export default Form;
