/* eslint comma-dangle: ["error", "never"] */

import { put } from 'redux-saga/effects';
import { createBrowserHistory } from 'history';
import * as actions from './actions';
import API from '../../../axios';
import Products from '../../products/pages/Products';
import Profile from '../../profile/pages/Profile';

export function* handlePostLogin(action) {
  try {
    const { email, password } = action.payload;

    const response = yield API.post('/login', { email, password });
    console.log(response);
    const { data } = response;

    yield put(actions.postLoginSuccess(data));

    const { token, role, name } = data;
    const user = { token, email, role, name };

    yield localStorage.setItem('user', JSON.stringify(user));

    const history = createBrowserHistory();

    const roleA = 'administrator'; // From localStorage
    const existToken = yield JSON.parse(localStorage.getItem('user')).token;

    if (existToken && roleA === 'client') history.push('/products', Products);
    if (existToken && roleA === 'administrator') history.push('/profile', Profile);
  } catch (error) {
    yield put(actions.postLoginError(error));
  }
}

export function* handlePostRegister(action) {
  try {
    const { email, password, name, role } = action.payload;

    const response = yield API.post('/users', { email, password, name, role });
    const { data } = response;

    yield put(actions.postRegisterSuccess(data));

    const { token } = data;
    const user = { token, email, role, name };

    yield localStorage.setItem('user', JSON.stringify(user));

    routerByAccess();
  } catch (error) {
    yield put(actions.postRegisterError(error));
  }
}
