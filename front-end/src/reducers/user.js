import { USER_INFO } from '../actions';

const INITIAL_STATE = {
  actualUser: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
  case USER_INFO:
    return {
      ...state, actualUser: action.array,
    };
  default:
    return state;
  }
}
