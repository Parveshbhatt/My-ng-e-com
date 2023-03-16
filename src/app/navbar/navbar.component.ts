import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from '../app.state';
import { loginFalse } from '../components/login-form/state/login.actions';
import { loginState } from '../components/login-form/state/login.state';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  loginSubscribtion: Subscription;
  isLogin = false;

  constructor(private store: Store<AppState>){

  }

  ngOnInit(){
    this.loginSubscribtion = this.store.select('login').subscribe((data) => {
      this.isLogin = data.login;
    });
  }

  loggedin(){
    return this.isLogin;
  }

  onLogout(){
    localStorage.removeItem('token');
    this.store.dispatch(loginFalse());
  }
}
