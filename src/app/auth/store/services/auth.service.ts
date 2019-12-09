import {Injectable} from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {users} from '../users';

@Injectable({providedIn: 'root'})
export class AuthService {

  usersArr = users;
  currentUser: any;

  constructor() {
  }

  logIn(userCredentials: any): Observable<any> {
    this.currentUser = this.findUserByAccount(userCredentials.account);
    if (!this.currentUser || this.currentUser.password !== userCredentials.password) {
      return throwError('Invalid username or password');
    }
    return of(this.currentUser);
  }

  signUp(userCredentials: any): Observable<any> {
    if (this.findUserByAccount(userCredentials.account)) {
      return throwError('User with the same email already exists');
    }
    this.usersArr.push(userCredentials);
    return of(userCredentials);
  }

  logOut() {

  }

  findUserByAccount(account) {
    return this.usersArr.find(user => user.account === account);
  }
}
