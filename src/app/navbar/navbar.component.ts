import { Component, DoCheck, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from '../app.state';
import { loginFalse } from '../components/login-form/state/login.actions';
import { loginState } from '../components/login-form/state/login.state';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, DoCheck{

  loginSubscribtion: Subscription;
  isLogin = false;
 
  storedTheme: string = '';

  constructor(private store: Store<AppState>, private theme: ThemeService){
    
  }

  ngOnInit(){
    this.storedTheme = this.theme.getTheme();
    console.log("nav theme: "+this.storedTheme);
    this.loginSubscribtion = this.store.select('login').subscribe((data) => {
      this.isLogin = data.login;
    });
  } 

  ngDoCheck(): void {
    this.storedTheme = this.theme.getTheme();
  }

  loggedin(){
    return this.isLogin;
  }

  onLogout(){
    localStorage.removeItem('token');
    this.store.dispatch(loginFalse());
  }
}
