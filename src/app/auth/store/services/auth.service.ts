import {Injectable} from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {users} from '../users';
import {HttpService} from '../../../services/http.service';
import {LangChangeEvent, TranslateService} from '@ngx-translate/core';

@Injectable({providedIn: 'root'})
export class AuthService {

  usersArr = users;
  currentUser: any;
  alerts: any;

  constructor(private httpService: HttpService, private translateService: TranslateService) {
    this.getAlerts();
    translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      this.getAlerts();
    });
  }

  logIn(userCredentials: any): Observable<any> {
    this.currentUser = this.findUserByAccount(userCredentials.account);
    if (!this.currentUser || this.currentUser.password !== userCredentials.password) {
      return throwError(this.alerts.login);
    }
    return of(this.currentUser);
  }

  signUp(userCredentials: any): Observable<any> {
    if (this.findUserByAccount(userCredentials.account)) {
      return throwError(this.alerts.register);
    }
    this.usersArr.push(userCredentials);
    return of(userCredentials);
  }

  findUserByAccount(account: string) {
    return this.usersArr.find(user => user.account === account);
  }

  getAlerts() {
    this.httpService.getAlerts(this.translateService.currentLang).subscribe((data) => {
      this.alerts = data.error;
    });
  }
}
