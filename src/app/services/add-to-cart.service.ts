import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
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

  constructor(private auth: AuthService,
    private product: ProductsService,
    private store: Store<AppState>,
    private router: Router) { 
      this.isLogin = this.auth.isLogin;
    }

    ngOnInit(){
      
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
          image: matchedProduct[0].image,
          category:matchedProduct[0].category,
        }
        console.log("PRoduct to add"+ product);
  
        this.store.dispatch(addProduct( { product } ));
      }else{
        this.router.navigate(['/login']);
      }
    }, 500);

    // this.route.paramMap.subscribe((params) => {
    //   console.log(params.get('id'));
    //   this.productId = +params.get('id');
    // });
  }
}