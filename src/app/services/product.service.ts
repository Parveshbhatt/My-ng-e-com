import { AfterContentChecked, DoCheck, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService{

  products = [];
  isLoading = new BehaviorSubject<boolean>(true);

  constructor(private http: HttpClient) {
    console.log("auth constructor");
    this.isLoading.next(true);
    this.http.get('https://dummyjson.com/products').subscribe((res) => {
      console.log(res['products']);
      for(const key in res['products']){
        if(res['products'].hasOwnProperty(key)){
          this.products.push({...res['products'][key]});
        }
      }
      this.isLoading.next(false);
      console.log(this.products);
      
    });
    
   }

   fetchProducts(){
    return false;
   }
}
