import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './auth';
import {RouteguardService} from './services/routeguard.service';
import {SignupComponent} from './auth/signup/signup.component';

export const appRoutes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'sign-up', component: SignupComponent},
  {path: 'admin', canActivate: [RouteguardService], loadChildren: () => import(`./admin/admin.module`).then(m => m.AdminModule)},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {enableTracing: true})],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
