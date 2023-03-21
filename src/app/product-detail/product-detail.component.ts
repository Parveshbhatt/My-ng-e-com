import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { AddToCartService } from '../services/add-to-cart.service';
import { AuthService } from '../services/auth.service';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  item: Object;
  faStar = faStar;
  storedTheme: string = '';
  constructor(private route: ActivatedRoute, private router: Router, private cart: AddToCartService,
    private theme: ThemeService) {

  }

  ngOnInit(): void {
    // this.storedTheme = this.theme.getTheme();
    this.theme.themeEmitter.subscribe((value)=>{
      this.storedTheme = value;
    })

    this.route.paramMap.subscribe((params) => {
      console.log('Item in detail');
      this.item = JSON.parse(params.get('item'));
      console.log(this.item);
    });
  }

  // ngDoCheck(): void {
  //   // this.storedTheme = this.theme.getTheme();
  // }

  onBackClick(){
    this.router.navigate(['/products']);
  }

  onAddToCart(id:number){
    this.cart.onAddToCart(id);
  }
}
