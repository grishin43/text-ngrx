import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AuthState} from '../store/reducers/auth.reducer';
import {selectIsLoginState, selectLoginState, selectSignUpState} from '../store';
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
  errors: any;

  constructor(private formBuilder: FormBuilder, private store: Store<AuthState>) {
  }

  ngOnInit() {
    this.store.select(selectIsLoginState).subscribe((res: boolean) => {
      this.loading = res;
    });
    this.signUpForm = this.formBuilder.group({
      account: ['', Validators.required],
      name: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  signUp() {
    this.store.dispatch(new AuthActions.SignUpStart());

    this.store.select(selectSignUpState).subscribe((res: boolean) => {
      this.loading = res;
    });

    this.store.select(selectLoginState).subscribe((res: any) => {
      this.errors = res;
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

    setTimeout(() => {
      this.store.dispatch(new AuthActions.SignUp(this.signUpForm.value));
      if (this.loginAfter && !this.errors) {
        this.store.dispatch(new AuthActions.LoginSuccess(this.signUpForm.value));
      }
    }, 1500);
  }
}
