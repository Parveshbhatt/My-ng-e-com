import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  loggedin(){
    return localStorage.getItem('token');
  }

  onLogout(){
    localStorage.removeItem('token');
  }
}
