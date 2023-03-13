import { Component, OnInit } from '@angular/core';
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
export class ProductsListComponent implements OnInit {

  cart: Observable<Product[]>

  constructor(private store: Store<AppState>){}

  ngOnInit(){
    this.cart = this.store.select(getCart);
  }
}
