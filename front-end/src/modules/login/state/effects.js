/* eslint comma-dangle: ["error", "never"] */

import { put } from 'redux-saga/effects';
import { createBrowserHistory } from 'history';
import * as actions from './actions';
import API from '../../../axios';
import Login from '../pages/Login';
import Products from '../../products/pages/Products';

export function* handlePostLogin(action) {
  try {
    const { email, password } = action.payload;

    const response = yield API.post('/login', { email, password });
    const { data } = response;

    yield put(actions.postLoginSuccess(data));

    const { token, role, name } = data;
    const user = { token, email, role, name };

    yield localStorage.setItem('user', JSON.stringify(user));

    const history = createBrowserHistory();
    history.push('/products', Products);
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

    const history = createBrowserHistory();
    history.push('/login', Login);
  } catch (error) {
    yield put(actions.postRegisterError(error));
  }
}
