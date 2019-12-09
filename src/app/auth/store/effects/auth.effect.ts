import * as authAction from '../actions/auth.actions';
import {Action} from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {AuthService} from '../services/auth.service';
import {catchError, map, mergeMap, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Router} from '@angular/router';

@Injectable()
export class AuthEffects {
  @Effect()
  signUp$: Observable<Action> = this
    .actions$
    .pipe(ofType<authAction.Login>(authAction.SignUpActionTypes.SIGN_UP),
      mergeMap(action => this.authService.signUp(action.payload)
        .pipe(
          map(data => ({type: authAction.SignUpActionTypes.SIGN_UP_SUCCESS})),
          catchError(() => of({type: authAction.SignUpActionTypes.SIGN_UP_FAIL})))));

  @Effect({dispatch: false})
  signUpSuccess$ = this
    .actions$
    .pipe(
      ofType(authAction.SignUpActionTypes.SIGN_UP_SUCCESS),
      tap(() => this.router.navigate(['/login']))
    );

  @Effect()
  login$: Observable<Action> = this
    .actions$
    .pipe(ofType<authAction.Login>(authAction.LoginActionTypes.LOGIN),
      mergeMap(action => this.authService.logIn(action.payload)
        .pipe(
          map(data => ({type: authAction.LoginActionTypes.LOGIN_SUCCESS})),
          catchError(() => of({type: authAction.LoginActionTypes.LOGIN_FAIL})))));

  @Effect({dispatch: false})
  logout$ = this
    .actions$
    .pipe(
      ofType(authAction.LoginActionTypes.LOGOUT),
      tap(() => localStorage.removeItem('user-token')),
      tap(() => this.router.navigate(['/login']))
    );

  @Effect({dispatch: false})
  loginSuccess$ = this
    .actions$
    .pipe(
      ofType(authAction.LoginActionTypes.LOGIN_SUCCESS),
      tap(() => localStorage.setItem('user-token', '123456789')),
      tap(() => this.router.navigate(['/admin']))
    );

  @Effect({dispatch: false})
  loginDone$ = this
    .actions$
    .pipe(
      ofType<authAction.LoginDone>(authAction.LoginActionTypes.LOGIN_DONE),
      tap(action => console.log(action)));

  constructor(private http: HttpClient, private actions$: Actions, private authService: AuthService, private router: Router) {
  }
}
