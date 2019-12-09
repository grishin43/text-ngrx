import { AccountComponent } from './account.component';
import { AccountRouting } from './auth.routing';
import { AuthEffects } from './store/effects/auth.effect';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { reducer } from './store/reducers/auth.reducer';
import { StoreModule } from '@ngrx/store';
import {TranslateModule} from '@ngx-translate/core';
import { SignupComponent } from './signup/signup.component';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AccountRouting,
    StoreModule.forFeature('authModule', reducer),
    EffectsModule.forFeature([AuthEffects]),
    TranslateModule
  ],
  declarations: [
     LoginComponent,
     AccountComponent,
     SignupComponent
  ]
})
export class AuthModule { }
