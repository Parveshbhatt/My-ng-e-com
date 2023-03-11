import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { loginState } from '../login-form/store/login.state';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit, OnDestroy{
  islogin: boolean;

  loginSubscribtion: Subscription;

  constructor(private router: Router , private store: Store<{ login: loginState }>) { }

  ngOnInit(): void{
    this.loginSubscribtion = this.store.select('login').subscribe((data) => {
      this.islogin = data.login;
      console.log("islogin: "+ this.islogin);
    })
  }

  ngOnDestroy(){
    if(this.loginSubscribtion){
      this.loginSubscribtion.unsubscribe();
    }
  }


  onAddToCart() {
    if(this.islogin){
      this.router.navigate(['/cart']);
    }else{
      this.router.navigate(['/login']);
    }
  }
  
}
