import { DoCheck, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from '../app.state';

@Injectable({
  providedIn: 'root'
})
export class ThemeService implements DoCheck{
  themeSubscribtion: Subscription;
  storedTheme:string;

  constructor(private store: Store<AppState>) { 
    this.themeSubscribtion = this.store.select('theme').subscribe((data) => {
      this.setTheme(data.theme);
      console.log("Theme Service: "+ this.getTheme());
    });
  }

  ngDoCheck(){
    this.themeSubscribtion = this.store.select('theme').subscribe((data) => {
      this.setTheme(data.theme);
      console.log("Theme Service: "+ this.getTheme());
    });
  }

  ngOnDestroy(){
    if(this.themeSubscribtion){
      this.themeSubscribtion.unsubscribe();
    }
  }

  setTheme(theme:string){
    this.storedTheme = theme;
  }

  getTheme(){
    return this.storedTheme;
  }
}
