import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loginFalse } from '../components/login-form/store/login.actions';
import { loginState } from '../components/login-form/store/login.state';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private store: Store<{login : loginState}>){

  }

  loggedin(){
    return localStorage.getItem('token');
  }

  onLogout(){
    localStorage.removeItem('token');
    this.store.dispatch(loginFalse());
  }
}
