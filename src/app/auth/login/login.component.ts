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

  signIn() {
    this.store.dispatch(new AuthActions.IsLogin());

    this.store.dispatch(new AuthActions.Login(this.loginForm.value));

    this.store.dispatch(new AuthActions.LoginDone());

    this.store.select(selectIsLoginState).subscribe((res: boolean) => {
      this.loading = res;
    });

    this.store.select(selectLoginState).subscribe((res: any) => {
      if (res) {
        Swal.fire({
          title: res.title,
          text: res.text,
          icon: 'error',
          confirmButtonText: res.button,
          customClass: {
            confirmButton: 'button-default blue'
          }
        });
      }
    });
  }
}
