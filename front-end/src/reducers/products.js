import { PROD_LIST, CART_LIST } from '../actions';

const INITIAL_STATE = {
  cartList: [],
  products: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
  case PROD_LIST:
    return {
      ...state, products: action.array,
    };
  case CART_LIST:
    return {
      ...state, cartList: action.array,
    };
  default:
    return state;
  }
}
