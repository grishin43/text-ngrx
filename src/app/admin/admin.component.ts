import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import * as AuthActions from '../auth/store/actions/auth.actions';
import {Store} from '@ngrx/store';
import {AuthState} from '../auth/store/reducers/auth.reducer';
import {selectUser} from '../auth/store';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  routeTitle: string;
  sidebarOpen: boolean;
  user: any;
  menu = [
    {
      title: 'admin.navigation.dashboard',
      route: 'dashboard',
      icon_class: 'fa fa-tasks'
    },
    {
      title: 'admin.navigation.products',
      route: 'products',
      icon_class: 'fa fa-archive'
    },
  ];

  constructor(
    public translateService: TranslateService,
    private store: Store<AuthState>,
    private router: Router) {
    this.store.select(selectUser).subscribe(res => {
      this.user = res;
    });
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.routeTitle = this.getRouteTitle(event.url);
    });
  }

  ngOnInit() {
    this.routeTitle = this.getRouteTitle(this.router.url);
  }

  onClick() {
    this.store.dispatch(new AuthActions.LogOut());
  }

  getRouteTitle(route) {
    return /[^/]*$/.exec(route)[0];
  }
}
