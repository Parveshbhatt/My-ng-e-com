import { DoCheck, EventEmitter, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { AppState } from '../app.state';
 
@Injectable({
  providedIn: 'root'
})
export class ThemeService{
  // themeSubscribtion: Subscription;
  // storedTheme:string;
  // themeEmitter = new EventEmitter<string>();

  
  themeEmitter = new BehaviorSubject<string>(localStorage.getItem('theme-color'));
  
  constructor(private store: Store<AppState>) { 
    // this.themeSubscribtion = this.store.select('theme').subscribe((data) => {
    //   this.setTheme(data.theme);
    //   console.log("Theme Service: "+ this.getTheme());
    // });
  }

  raiseThemeEvent(theme:string){
    this.themeEmitter.next(theme);
  }

  // ngDoCheck(){
  //   // this.themeSubscribtion = this.store.select('theme').subscribe((data) => {
  //   //   this.setTheme(data.theme);
  //   //   console.log("Theme Service: "+ this.getTheme());
  //   // });
  // }

  // ngOnDestroy(){
  //   // if(this.themeSubscribtion){
  //   //   this.themeSubscribtion.unsubscribe();
  //   // }
  // }

  // setTheme(theme:string){
  //   this.storedTheme = theme;
  // }

  // getTheme(){
  //   return this.storedTheme;
  // }

 
}
