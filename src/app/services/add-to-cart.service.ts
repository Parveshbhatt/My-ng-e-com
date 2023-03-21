import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from '../app.state';
import { addProduct } from '../cart/state/cart.actions';
import { Product } from '../model/product';
import { AuthService } from './auth.service';
import { ProductsService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class AddToCartService implements OnInit {

  isLogin:boolean;
  loginSubscribtion: Subscription;

  constructor(private auth: AuthService,
    private product: ProductsService,
    private store: Store<AppState>,
    private router: Router) { 
      this.loginSubscribtion = this.store.select('login').subscribe((data) => {
        this.isLogin =  data.login;
      });
    }

    ngOnInit(){
      
    }

    ngOnDestroy(): void {
      if(this.loginSubscribtion){
        this.loginSubscribtion.unsubscribe();
      }
    }

  onAddToCart(id:number) {

    setTimeout(() =>{
      console.log("this.auth login: ")
      console.log(this.isLogin);
      if(this.isLogin){
        console.log("from onAddtoCart productId: "+id)
      const matchedProduct =  this.product.products.filter((product) => {
          return product.id === id;
        })
   
  
        console.log(matchedProduct);
  
        const product: Product = {
          id: matchedProduct[0].id,
          price: matchedProduct[0].price,
          title: matchedProduct[0].title,
          description: matchedProduct[0].description,
          image: matchedProduct[0].thumbnail,
          category:matchedProduct[0].category,
        }
        console.log("PRoduct to add"+ product);
  
        this.store.dispatch(addProduct( { product } ));
      }else{
        this.router.navigate(['/login']);
      }
    }, 500);
  }
}
