import {LoginActionsUnion, LoginActionTypes, SignUpActionsUnion, SignUpActionTypes} from '../actions/auth.actions';

export interface AuthState {
  loggedIn: boolean;
  errorMsg: string;
  user: object;
  isLogging: boolean;
}

export const initialState: AuthState = {
  loggedIn: false,
  errorMsg: null,
  user: null,
  isLogging: false
};

export function reducer(state: AuthState = initialState, action: LoginActionsUnion | SignUpActionsUnion): AuthState {
  switch (action.type) {
    case SignUpActionTypes.SIGN_UP:
      return {
        ...state,
        user: action.payload
      };
    case SignUpActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        errorMsg: null
      };
    case SignUpActionTypes.SIGN_UP_FAIL:
      return {
        ...state,
        errorMsg: 'User already exist'
      };
    case LoginActionTypes.LOGIN:
      return {
        ...state,
        user: action.payload
      };
    case LoginActionTypes.LOGOUT:
      return {
        ...state,
        loggedIn: false,
        errorMsg: null,
        user: null,
        isLogging: false
      };
    case LoginActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        errorMsg: null
      };
    case LoginActionTypes.LOGIN_FAIL:
      return {
        ...state,
        errorMsg: 'Invalid user credential'
      };
    case LoginActionTypes.IS_LOGIN:
      return {
        ...state,
        isLogging: true
      };
    case LoginActionTypes.LOGIN_DONE:
      return {
        ...state,
        isLogging: false
      };
    default:
      return state;
  }
}

export const getLoginState = (state: AuthState) => state.loggedIn;
export const getAuthStatus = (state: AuthState) => state.errorMsg;
export const getIsLoginState = (state: AuthState) => state.isLogging;
export const getUser = (state: AuthState) => state.user;
