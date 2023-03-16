import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ProductsService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit, OnChanges{
  products = [];
  isLogin:boolean;
  item:Object;
  
//   this.route.paramMap.subscribe((params) => {
//     console.log(params.get('id'));
//     this.productId = +params.get('id');
//   });

  constructor(private productService: ProductsService, 
    private route: ActivatedRoute, 
    private auth: AuthService,
    private router: Router){
    this.products = this.productService.products;
    this.isLogin = auth.isLogin;
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  // onProductClick(item:Object){
  //   console.log("item from product");
  //   console.log(item);
  //   this.router.navigate(['/product-detail', {item: JSON.stringify(item)}]);
  // }

}

