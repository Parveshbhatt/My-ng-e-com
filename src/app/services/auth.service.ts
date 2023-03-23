import { DoCheck, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from '../app.state';
import { User } from '../model/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService implements DoCheck{

  isLogin:boolean;
  
  loginSubscribtion: Subscription;

  constructor(private store: Store<AppState>) {
    this.loginSubscribtion = this.store.select('login').subscribe((data) => {
      this.isLogin =  data.login;
    });
   }

  ngOnInit(): void {
  }


  ngDoCheck(): void {
    this.loginSubscribtion = this.store.select('login').subscribe((data) => {
      this.isLogin =  data.login;
    });
  }

  ngOnDestroy(): void {
    if(this.loginSubscribtion){
      this.loginSubscribtion.unsubscribe();
    }
  }

  authUser(user: User){
    let usersArray = [];
    if(localStorage.getItem('Users')){
      usersArray = JSON.parse(localStorage.getItem('Users'));
    }

    return usersArray.find(person => {
      return ((person.username === user.username || person.email === user.username) && person.password === user.password);
    })
  }
}
