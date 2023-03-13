import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { HomeComponent } from 'src/app/home/home.component';
import { loginTrue } from './state/login.actions';
import { loginState } from './state/login.state';
import { AppState } from 'src/app/app.state';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  loginForm: FormGroup;
  wrongCredentials: boolean;

  constructor(private authService: AuthService,
    private router: Router, private store: Store<AppState>
  ) {
    this.wrongCredentials = false;
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    })
  }

  onLogin() {
    console.log(this.loginForm);

    const token = this.authService.authUser(this.loginForm.value);

    if (token) {
      localStorage.setItem('token', token.username);
      console.log("Login Successfull");
      this.router.navigate(['/home']);
      this.wrongCredentials = false;
      this.store.dispatch(loginTrue());
    } else {
      this.wrongCredentials = true;
      console.log("Login not successfull");
    }
  }


  // ------- getters -------

  get username() {
    return this.loginForm.get('username') as FormControl;
  }

  get password() {
    return this.loginForm.get('password') as FormControl;
  }


}
