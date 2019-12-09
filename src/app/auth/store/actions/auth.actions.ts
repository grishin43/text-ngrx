import {Action} from '@ngrx/store';

export enum LoginActionTypes {
  LOGIN = '[AUTH] LOGIN',
  LOGOUT = '[AUTH] LOGOUT',
  LOGIN_SUCCESS = '[AUTH] LOGIN_SUCCESS',
  LOGIN_FAIL = '[AUTH] LOGIN_FAIL',
  IS_LOGIN = '[AUTH] IS_LOGIN',
  LOGIN_DONE = '[AUTH] LOGIN_DONE'
}

export enum SignUpActionTypes {
  SIGN_UP = '[AUTH] SIGN_UP',
  SIGN_UP_SUCCESS = '[AUTH] SIGN_UP_SUCCESS',
  SIGN_UP_FAIL = '[AUTH] SIGN_UP_FAIL',
  SIGN_UP_DONE = '[AUTH] SIGN_UP_DONE'
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

  constructor(public payload: string) {
  }
}

export class SignUpDone implements Action {
  readonly type = SignUpActionTypes.SIGN_UP_DONE;
}

export class Login implements Action {
  readonly type = LoginActionTypes.LOGIN;

  constructor(public payload: object) {
  }
}

export class LoginSuccess implements Action {
  readonly type = LoginActionTypes.LOGIN_SUCCESS;
}

export class LoginFail implements Action {
  readonly type = LoginActionTypes.LOGIN_FAIL;

  constructor(public payload: string) {
  }
}

export class IsLogin implements Action {
  readonly type = LoginActionTypes.IS_LOGIN;
}

export class LoginDone implements Action {
  readonly type = LoginActionTypes.LOGIN_DONE;
}

export class LogOut implements Action{
  readonly type = LoginActionTypes.LOGOUT;
}

export type LoginActionsUnion = Login | LogOut | LoginSuccess | LoginFail | IsLogin | LoginDone;
export type SignUpActionsUnion = SignUp | SignUpSuccess | SignUpFail | SignUpDone;
