import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AuthState} from '../store/reducers/auth.reducer';
import {selectIsLoginState, selectLoginState} from '../store';
import * as AuthActions from '../store/actions/auth.actions';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  loading = false;
  loginAfter = false;

  constructor(private formBuilder: FormBuilder, private store: Store<AuthState>) {
  }

  ngOnInit() {
    this.store.select(selectIsLoginState).subscribe(res => {
      this.loading = res;
    });
    this.signUpForm = this.formBuilder.group({
      account: ['', Validators.required],
      name: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(formData) {
    const authData = {
      account: formData.account.trim(),
      name: formData.name.trim(),
      password: formData.password.trim()
    };

    this.store.dispatch(new AuthActions.SignUp(authData));

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

    if (this.loginAfter) {
      this.store.dispatch(new AuthActions.LoginSuccess());
    }
  }
}
