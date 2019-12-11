import {LoginActionsUnion, LoginActionTypes, SignUpActionsUnion, SignUpActionTypes} from '../actions/auth.actions';

export interface AuthState {
  loggedIn: boolean;
  error: string;
  user: object;
  isLogging: boolean;
}

export const initialState: AuthState = {
  loggedIn: false,
  error: null,
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
        error: null
      };
    case SignUpActionTypes.SIGN_UP_FAIL:
      return {
        ...state,
        error: action.payload
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
        error: null,
        user: null,
        isLogging: false
      };
    case LoginActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loggedIn: true,
        error: null
      };
    case LoginActionTypes.LOGIN_FAIL:
      return {
        ...state,
        error: action.payload
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
export const getAuthStatus = (state: AuthState) => state.error;
export const getIsLoginState = (state: AuthState) => state.isLogging;
export const getUser = (state: AuthState) => state.user;
