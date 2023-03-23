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
export class ThemeComponent  implements OnInit{
  // storedTheme: string = localStorage.getItem('theme-color');
  storedTheme:string;
  

  constructor(private store: Store<AppState>, private theme: ThemeService){
    
  }

  ngOnInit(): void {
    // this.storedTheme = this.theme.getTheme();
    this.storedTheme = localStorage.getItem('theme-color');
    this.theme.raiseThemeEvent(this.storedTheme);
    this.theme.themeEmitter.subscribe((value)=>{
      this.storedTheme = value;
    })
  }

  ngDoCheck(): void {
    // this.storedTheme = this.theme.getTheme();
    // this.theme.themeEmitter.subscribe((value)=>{
    //   this.storedTheme = value;
    // })
  }


  // setTheme(){
  //   if(this.storedTheme === 'theme-dark'){
  //     localStorage.setItem('theme-color', 'theme-light');
  //     // this.storedTheme = localStorage.getItem('theme-color');
  //     this.store.dispatch(themeLight());
  //   }else{
  //     localStorage.setItem('theme-color', 'theme-dark');
  //     // this.storedTheme = localStorage.getItem('theme-color');
  //     this.store.dispatch(themeDark());
  //   }
  // }

   setTheme(){
    if(this.storedTheme === 'theme-dark'){
      localStorage.setItem('theme-color', 'theme-light');
      // this.storedTheme = localStorage.getItem('theme-color');
      // this.store.dispatch(themeLight());
      this.theme.raiseThemeEvent('theme-light');
    }else{
      localStorage.setItem('theme-color', 'theme-dark');
      // this.storedTheme = localStorage.getItem('theme-color');
      // this.store.dispatch(themeDark());
      this.theme.raiseThemeEvent('theme-dark');
    }
  }
}
