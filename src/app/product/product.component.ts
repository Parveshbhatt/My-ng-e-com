import { AfterContentChecked, AfterContentInit, AfterViewChecked, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ProductsService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit, OnChanges, OnChanges{
  products = [];
  isLogin:boolean;
  isLoading: boolean;
  item:Object;
  searchValue: string = '';
  
//   this.route.paramMap.subscribe((params) => {
//     console.log(params.get('id'));
//     this.productId = +params.get('id');
//   });

  constructor(private productService: ProductsService, 
    private route: ActivatedRoute, 
    private auth: AuthService,
    private router: Router){
    this.isLogin = auth.isLogin;
    this.isLoading = true;
  }

  ngOnInit(): void {
    this.isLoading = this.productService.isLoading;
    // console.log("loading in product: ");
    console.log(this.isLoading);
    // this.isLoading = this.productService.fetchProducts();
    setTimeout(()=>{
      this.isLoading = false;
    },250);
    this.products = this.productService.products;
    // this.isLoading = this.productService.fetchProducts();
    // console.log("After loading in product: ");
    // console.log(this.isLoading);
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngAfterContentInit(){
    // this.isLoading = false;
  }

  // onProductClick(item:Object){
  //   console.log("item from product");
  //   console.log(item);
  //   this.router.navigate(['/product-detail', {item: JSON.stringify(item)}]);
  // }

  onSearchValueEntered(eventData: string){
    this.searchValue = eventData;
    console.log(this.searchValue);
  }

  ngAfterViewChecked(): void {
      // this.isLoading = this.productService.fetchProducts();
      // this.isLoading = false;
      // console.log("isloading in after content checked: "+this.isLoading);
  }

  sort(order:string){
    if(order==='asc'){
      this.products.sort(
        (p1, p2):number =>{
          return p1.price > p2.price ? 1:-1;
        }
      )
    }else{
      this.products.sort(
        (p1, p2):number =>{
          return p1.price > p2.price ? -1: 1;
        }
      )

    }
  }

}

