import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { loginFalse } from '../components/login-form/state/login.actions';
import { loginState } from '../components/login-form/state/login.state';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private store: Store<AppState>){

  }

  loggedin(){
    return localStorage.getItem('token');
  }

  onLogout(){
    localStorage.removeItem('token');
    this.store.dispatch(loginFalse());
  }
}
