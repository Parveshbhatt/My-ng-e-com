import { AfterContentChecked, AfterContentInit, AfterViewChecked, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ProductsService } from '../services/product.service';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit{
  products = [];
  isLogin:boolean;
  isLoading: boolean = true;
  item:Object;
  searchValue: string = '';

  storedTheme: string = '';
  
  
//   this.route.paramMap.subscribe((params) => {
//     console.log(params.get('id'));
//     this.productId = +params.get('id');
//   });

  constructor(private productService: ProductsService, 
    private route: ActivatedRoute, 
    private auth: AuthService,
    private router: Router,
    private theme: ThemeService){
    this.isLogin = auth.isLogin;
    // this.isLoading = this.productService.getIsLoading();
  }

  ngOnInit(): void {
    
    // this.isLoading = true;
    this.theme.themeEmitter.subscribe((value)=>{
      this.storedTheme = value;
    });
    console.log("theme in product component: :");
    console.log(this.storedTheme);
    this.productService.isLoading.subscribe((value)=>{
      console.log("load in product:");
      console.log(value);
      this.isLoading = value;
    });
    // this.storedTheme = this.theme.getTheme();
    // console.log("loading in product: ");
    // this.isLoading = this.productService.fetchProducts();
    // setTimeout(()=>{
      // this.isLoading = this.productService.getIsLoading();
      console.log(this.isLoading);

      
    // },250);
    this.products = this.productService.products;
  // this.isLoading = false;
    // this.isLoading = this.productService.fetchProducts();
    // console.log("After loading in product: ");
    // this.isLoading = this.productService.getIsLoading();
    console.log(this.isLoading);
  }

  ngDoCheck(): void {
      // this.storedTheme = this.theme.getTheme();
      // this.theme.themeEmitter.subscribe((value)=>{
      //   this.storedTheme = value;
      // });
      // this.productService.isLoading.subscribe((value)=>{
      //   this.isLoading = value;
      // });
  }

  // ngOnChanges(changes: SimpleChanges): void {
  // }

  // ngAfterContentInit(){
  //   // this.isLoading = false;
  // }

  // onProductClick(item:Object){
  //   console.log("item from product");
  //   console.log(item);
  //   this.router.navigate(['/product-detail', {item: JSON.stringify(item)}]);
  // }

  onSearchValueEntered(eventData: string){
    this.searchValue = eventData;
    console.log(this.searchValue);
  }

  // ngAfterViewChecked(): void {
  //     // this.isLoading = this.productService.fetchProducts();
  //     // this.isLoading = false;
  //     // console.log("isloading in after content checked: "+this.isLoading);
  // }

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

