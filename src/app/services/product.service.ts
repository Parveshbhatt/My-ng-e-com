import { AfterContentChecked, DoCheck, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService{

  products = [];
  isLoading = new BehaviorSubject<boolean>(true);
  

  // raiseLoadEvent(loading:boolean){
  //   this.isLoading.next(loading);
  // }

  constructor(private http: HttpClient) {
    console.log("auth constructor");
    
    // console.log(this.isLoading);
    // this.raiseLoadEvent(true);
    this.isLoading.next(true);
    // console.log("in product service laod:");
    // this.isLoading.subscribe((value) => {
    //   console.log("lB: "+value)
    // });
    this.http.get('https://dummyjson.com/products').subscribe((res) => {
      console.log(res['products']);
      for(const key in res['products']){
        if(res['products'].hasOwnProperty(key)){
          this.products.push({...res['products'][key]});
        }
      }
      // for(const key in res){
      //   if(res.hasOwnProperty(key)){
      //     this.products.push({...res[key]});
      //   }
      // }
      // this.setIsLoading(false);
      // this.raiseLoadEvent(false);
      this.isLoading.next(false);
      console.log(this.products);
      // console.log("in product service laod after:");
      // this.isLoading.subscribe((value) => {
      //   console.log("lA: "+value)
      // });
      
    });
    // this.isLoading = false;
    
   }

   fetchProducts(){
    return false;
   }


  //  ngOnInit(){
    // this.fetchProducts();
    // this.http.get('https://fakestoreapi.com/products').subscribe((res) => {
    //   for(const key in res){
    //     if(res.hasOwnProperty(key)){
    //       this.products.push({...res[key]});
    //     }
    //   }
    //   console.log(this.products);
    // });
    // console.log("product service on init ");
    // this.isLoading = false;
  //  }

  //  ngAfterContentChecked(): void {
  //      this.isLoading = false;
  //  }

  // fetchProducts(){
    
  // }

  //getter , setter

  // setIsLoading(value:boolean){
  //   this.isLoading = value;
  // }

  // getIsLoading():boolean{
  //   return this.isLoading;
  // }
}
