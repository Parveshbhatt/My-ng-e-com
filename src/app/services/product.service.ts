import { AfterContentChecked, DoCheck, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService implements OnInit, AfterContentChecked{

  products = [];
  isLoading: boolean = true;

  constructor(private http: HttpClient) {
    console.log("auth constructor");
    console.log(this.isLoading);
    this.http.get('https://fakestoreapi.com/products').subscribe((res) => {
      for(const key in res){
        if(res.hasOwnProperty(key)){
          this.products.push({...res[key]});
        }
      }
      // console.log(this.products);
    });
    // this.isLoading = false;
   }

   fetchProducts(){
    return false;
   }


   ngOnInit(){
    // this.fetchProducts();
    // this.http.get('https://fakestoreapi.com/products').subscribe((res) => {
    //   for(const key in res){
    //     if(res.hasOwnProperty(key)){
    //       this.products.push({...res[key]});
    //     }
    //   }
    //   console.log(this.products);
    // });
    console.log("product service on init ");
    this.isLoading = false;
   }

   ngAfterContentChecked(): void {
       this.isLoading = false;
   }

  // fetchProducts(){
    
  // }
}
