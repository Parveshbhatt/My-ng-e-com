import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { AddToCartService } from '../services/add-to-cart.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  item: Object;
  faStar = faStar;
  constructor(private route: ActivatedRoute, private router: Router, private cart: AddToCartService) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      console.log('Item in detail');
      this.item = JSON.parse(params.get('item'));
      console.log(this.item);
    });
  }

  onBackClick(){
    this.router.navigate(['/products']);
  }

  onAddToCart(id:number){
    this.cart.onAddToCart(id);
  }
}
