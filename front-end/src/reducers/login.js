import {
  EMAIL, PASSWORD, REG_NAME, REG_EMAIL, REG_PASS, PROFILE_NAME,
} from '../actions';

const INITIAL_STATE = {
  email: false,
  password: false,
  regName: false,
  regEmail: false,
  regPass: false,
  profileName: '',
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
  case EMAIL:
    return {
      ...state, email: action.boolean,
    };
  case PASSWORD:
    return {
      ...state, password: action.boolean,
    };
  case REG_NAME:
    return {
      ...state, regName: action.boolean,
    };
  case REG_EMAIL:
    return {
      ...state, regEmail: action.boolean,
    };
  case REG_PASS:
    return {
      ...state, regPass: action.boolean,
    };
  case PROFILE_NAME:
    return {
      ...state, profileName: action.name,
    };
  default:
    return state;
  }
}
