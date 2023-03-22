import { DoCheck, EventEmitter, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { AppState } from '../app.state';
 
@Injectable({
  providedIn: 'root'
})
export class ThemeService{

  
  themeEmitter = new BehaviorSubject<string>(localStorage.getItem('theme-color'));
  
  constructor(private store: Store<AppState>) { 
  }

  raiseThemeEvent(theme:string){
    this.themeEmitter.next(theme);
  }
}
