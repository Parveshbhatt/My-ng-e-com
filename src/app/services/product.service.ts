import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products = [];

  constructor(private http: HttpClient) {
    this.http.get('https://fakestoreapi.com/products').subscribe((res) => {
      for(const key in res){
        if(res.hasOwnProperty(key)){
          this.products.push({...res[key]});
        }
      }
      // console.log(this.products);
    });
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
   }
   

  // fetchProducts(){
    
  // }
}
