import { Component, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { Product } from 'src/app/model/product';

import { getCart } from '../state/cart.selector'

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit, OnChanges {

  cart: Observable<Product[]>
  cartArray = [];
  totalItems:number;
  subTotal:number = 0;
  gst:number = 0;
  total:number = 0;

  constructor(private store: Store<AppState>){}

  ngOnInit(){
    this.cart = this.store.select(getCart);
    this.cart.subscribe((data)=>{
      this.totalItems = data.length;
      this.cartArray  = [...data];
    });

    console.log("From CArt: ");
    console.log(this.cartArray);

    this.subTotal = this.cartArray?.reduce((acc, curr)=>{
      return acc + curr.price;
  }, 0).toFixed(2);

  this.gst = this.cartArray?.reduce((acc, curr) => {
    return acc + (curr.price * 0.18);
  }, 0).toFixed(2);

  this.total = +(+this.subTotal + +this.gst).toFixed(2) ;
    
  }

  // ngOnChanges(change :SimpleChange){
  //   
  // }

  
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngon changes in cart: ");
    
  }   
}
