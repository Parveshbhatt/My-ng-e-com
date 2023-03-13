import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { loginState } from '../login-form/state/login.state';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faHeartCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { Product } from 'src/app/model/product';
import { addProduct } from 'src/app/cart/state/cart.actions';
import { ProductsService } from 'src/app/services/product.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit, OnDestroy{

  @Input() id:number = 0;
  @Input() title:string = "";
  @Input() description:string = "";
  @Input() price:number = 0;
  @Input() source:string = "";
  @Input() ratingRate:number = 0;
  @Input() ratingCount:number = 0;

  faStar = faStar;
  faHeartCirclePlus = faHeartCirclePlus;


  islogin: boolean;
  productId: number;

  loginSubscribtion: Subscription;
  products = this.productService.products;

  constructor(private router: Router, 
    private store: Store<AppState>, 
    private route: ActivatedRoute, 
    private productService: ProductsService, 
    private http: HttpClient) { 
  
    }

  
  ngOnInit(): void{
    console.log(this.products);

    this.loginSubscribtion = this.store.select('login').subscribe((data) => {
      this.islogin = data.login;
      console.log("islogin: "+ this.islogin);
    });
  }

  ngOnDestroy(){
    if(this.loginSubscribtion){
      this.loginSubscribtion.unsubscribe();
    }
  }

  onAddToCart(eventData: any) {

    this.route.paramMap.subscribe((params) => {
      console.log(params.get('id'));
      this.productId = +params.get('id');
    });
    console.log(eventData);
    if(this.islogin){
      console.log("productId: "+this.productId)
    const matchedProduct =  this.products.filter((product) => {
      console.log(product.id === this.productId);
        return product.id === this.productId;
      })


      console.log(matchedProduct);

      const product: Product = {
        id: matchedProduct[0].id,
        price: matchedProduct[0].price,
        title: matchedProduct[0].title,
        description: matchedProduct[0].description,
      }
      console.log("PRoduct to add"+ product);

      this.store.dispatch(addProduct( { product } ));
    }else{
      this.router.navigate(['/login']);
    }
  }    

}
