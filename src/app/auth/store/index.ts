import * as fromAuth from './reducers/auth.reducer';
import {AuthState} from './reducers/auth.reducer';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export const selectAuthState = createFeatureSelector<AuthState>('authModule');

export const selectAuthStatusState = createSelector(
  selectAuthState,
  fromAuth.getLoginState
);

export const selectLoginState = createSelector(
  selectAuthState,
  fromAuth.getAuthStatus
);

export const selectIsLoginState = createSelector(
  selectAuthState,
  fromAuth.getIsLoginState
);

export const selectUser = createSelector(
  selectAuthState,
  fromAuth.getUser
);

export const selectSignUpState = createSelector(
  selectAuthState,
  fromAuth.getSignUpState
);
