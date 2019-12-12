import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {selectAuthStatusState} from '../auth/store';
import {Store} from '@ngrx/store';
import {AuthState} from '../auth/store/reducers/auth.reducer';

@Injectable({
  providedIn: 'root'
})
export class ResolverService implements CanActivate {

  isLogin: any;

  constructor(private router: Router, private store: Store<AuthState>) {
    this.store.select(selectAuthStatusState).subscribe(res => {
      this.isLogin = res;
    });
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.isLogin && !localStorage.getItem('user-token')) {
      return true;
    }
    this.router.navigate(['/admin']);
    return false;
  }
}
