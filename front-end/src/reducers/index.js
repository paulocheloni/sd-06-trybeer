import { combineReducers } from 'redux';
import login from './login';
import user from './user';
import products from './products';

const rootReducer = combineReducers({ login, user, products });

export default rootReducer;
