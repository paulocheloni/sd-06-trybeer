import { combineReducers } from 'redux';
import login from './login';
import user from './user';
import products from './products';
import orders from './orders';

const rootReducer = combineReducers({ login, user, products, orders });

export default rootReducer;
