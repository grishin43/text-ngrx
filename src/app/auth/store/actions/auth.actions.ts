import {Action} from '@ngrx/store';

export enum LoginActionTypes {
  LOGIN = '[AUTH] LOGIN',
  LOGOUT = '[AUTH] LOGOUT',
  LOGIN_SUCCESS = '[AUTH] LOGIN_SUCCESS',
  LOGIN_FAIL = '[AUTH] LOGIN_FAIL',
  LOGIN_START = '[AUTH] LOGIN_START'
}

export enum SignUpActionTypes {
  SIGN_UP = '[AUTH] SIGN_UP',
  SIGN_UP_SUCCESS = '[AUTH] SIGN_UP_SUCCESS',
  SIGN_UP_FAIL = '[AUTH] SIGN_UP_FAIL',
  SIGN_UP_DONE = '[AUTH] SIGN_UP_DONE',
  SIGN_UP_START = '[AUTH] SIGN_UP_START'
}

export class SignUp implements Action {
  readonly type = SignUpActionTypes.SIGN_UP;

  constructor(public payload: object) {
  }
}

export class SignUpSuccess implements Action {
  readonly type = SignUpActionTypes.SIGN_UP_SUCCESS;
}

export class SignUpFail implements Action {
  readonly type = SignUpActionTypes.SIGN_UP_FAIL;

  constructor(public payload: any) {
  }
}

export class SignUpDone implements Action {
  readonly type = SignUpActionTypes.SIGN_UP_DONE;
}

export class SignUpStart implements Action {
  readonly type = SignUpActionTypes.SIGN_UP_START;
}

export class Login implements Action {
  readonly type = LoginActionTypes.LOGIN;

  constructor(public payload: object) {
  }
}

export class LoginStart implements Action {
  readonly type = LoginActionTypes.LOGIN_START;
}

export class LoginSuccess implements Action {
  readonly type = LoginActionTypes.LOGIN_SUCCESS;

  constructor(public payload: object) {
  }
}

export class LoginFail implements Action {
  readonly type = LoginActionTypes.LOGIN_FAIL;

  constructor(public payload: any) {
  }
}

export class LogOut implements Action {
  readonly type = LoginActionTypes.LOGOUT;
}

export type LoginActionsUnion = Login | LogOut | LoginSuccess | LoginFail | LoginStart;
export type SignUpActionsUnion = SignUp | SignUpSuccess | SignUpFail | SignUpDone | SignUpStart;
