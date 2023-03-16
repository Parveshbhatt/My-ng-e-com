import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { LoginPageModule } from './pages/login-page/login-page.module';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { CartComponent } from './cart/cart.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ProductsListComponent } from './cart/products-list/products-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './product/product.component';
import { ProductsService } from './services/product.service';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';


const appRoute: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'loginpage', component: LoginPageComponent},
  {path: 'singup', component: SignupFormComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ProductCardComponent,
    CartComponent,
    ProductsListComponent,
    ProductComponent,
    ProductDetailComponent,
    SearchComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    LoginPageModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [
    ProductsService,
    UserService,
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
