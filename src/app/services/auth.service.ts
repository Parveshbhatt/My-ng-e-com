import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  authUser(user: any){
    let usersArray = [];
    if(localStorage.getItem('Users')){
      usersArray = JSON.parse(localStorage.getItem('Users'));
    }

    return usersArray.find(person => {
      return ((person.username === user.username || person.email === user.username) && person.password === user.password);
    })
  }
}
