import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store, select} from '@ngrx/store';
import {AuthState} from '../store/reducers/auth.reducer';
import * as AuthActions from '../store/actions/auth.actions';
import {selectLoginState, selectIsLoginState} from '../store';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;

  constructor(private formBuilder: FormBuilder, private store: Store<AuthState>) {
  }

  ngOnInit() {
    this.store.select(selectIsLoginState).subscribe(res => {
      this.loading = res;
    });
    this.loginForm = this.formBuilder.group({
      account: [
        '', Validators.required
      ],
      password: [
        '', Validators.required
      ]
    });
  }

  onSubmit(formData) {
    this.store.dispatch(new AuthActions.IsLogin);

    const authData = {
      account: formData.account.trim(),
      password: formData.password.trim()
    };

    this.store.dispatch(new AuthActions.Login(authData));
    this.store.dispatch(new AuthActions.LoginDone);

    this.store.select(selectIsLoginState).subscribe(res => {
      this.loading = res;
    });

    this.store.select(selectLoginState).subscribe(res => {
      if (res) {
        Swal.fire({
          title: 'Error',
          text: res,
          icon: 'error',
          confirmButtonText: 'OK',
          customClass: {
            confirmButton: 'button-default blue'
          }
        });
      }
    });
  }
}
