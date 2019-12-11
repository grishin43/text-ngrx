import * as authAction from '../actions/auth.actions';
import {Action} from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {AuthService} from '../services/auth.service';
import {HttpService} from '../../../services/http.service';
import {catchError, map, mergeMap, switchMap, tap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Router} from '@angular/router';

@Injectable()
export class AuthEffects {
  constructor(
    private httpService: HttpService,
    private actions$: Actions,
    private authService: AuthService,
    private router: Router) {
  }

  @Effect()
  signUp$: Observable<Action> = this
    .actions$
    .pipe(ofType<authAction.Login>(authAction.SignUpActionTypes.SIGN_UP),
      mergeMap(action => this.authService.signUp(action.payload)
        .pipe(
          map(data => ({type: authAction.SignUpActionTypes.SIGN_UP_SUCCESS})),
          catchError(error => of(new authAction.SignUpFail(error)))
        )
      )
    );

  @Effect({dispatch: false})
  signUpSuccess$ = this
    .actions$
    .pipe(
      ofType(authAction.SignUpActionTypes.SIGN_UP_SUCCESS),
      tap(() => this.router.navigate(['/login']))
    );

  @Effect()
  login$: Observable<Action> = this.actions$.pipe(ofType(authAction.LoginActionTypes.LOGIN)).pipe(
    switchMap((action: any) => {
      return this.authService
        .logIn(action.payload)
        .pipe(
          map(user => new authAction.LoginSuccess(user)),
          catchError(error => of(new authAction.LoginFail(error)))
        );
    })
  );

  @Effect({dispatch: false})
  logout$ = this
    .actions$
    .pipe(
      ofType(authAction.LoginActionTypes.LOGOUT),
      tap(() => localStorage.removeItem('user-token')),
      tap(() => localStorage.removeItem('user-name')),
      tap(() => this.router.navigate(['/login']))
    );

  @Effect({dispatch: false})
  loginSuccess$ = this
    .actions$
    .pipe(
      ofType(authAction.LoginActionTypes.LOGIN_SUCCESS),
      tap(() => localStorage.setItem('user-token', '123456789')),
      tap((action: any) => localStorage.setItem('user-name', action.payload.name)),
      tap(() => this.router.navigate(['/admin']))
    );

  @Effect({dispatch: false})
  loginDone$ = this
    .actions$
    .pipe(
      ofType<authAction.LoginDone>(authAction.LoginActionTypes.LOGIN_DONE),
      tap(action => console.log(action)));
}
