import { Component, DoCheck, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { ThemeService } from 'src/app/services/theme.service';
import { themeDark, themeLight } from './state/theme.actions';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent  implements OnInit, DoCheck{
  // storedTheme: string = localStorage.getItem('theme-color');
  storedTheme:string;
  

  constructor(private store: Store<AppState>, private theme: ThemeService){}

  ngOnInit(): void {
    // localStorage.setItem('theme-color', 'theme-light');
    this.storedTheme = this.theme.getTheme();
  }

  ngDoCheck(): void {
    this.storedTheme = this.theme.getTheme();
  }


  setTheme(){
    if(this.storedTheme === 'theme-dark'){
      // localStorage.setItem('theme-color', 'theme-light');
      // this.storedTheme = localStorage.getItem('theme-color');
      this.store.dispatch(themeLight());
    }else{
      // localStorage.setItem('theme-color', 'theme-dark');
      // this.storedTheme = localStorage.getItem('theme-color');
      this.store.dispatch(themeDark());
    }
  }
}
