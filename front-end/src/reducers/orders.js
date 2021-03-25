import {
  ORDERS,
} from '../actions';

const INITIAL_STATE = {
  orders: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
  case ORDERS:
    return {
      ...state, orders: action.array,
    };
  default:
    return state;
  }
}
