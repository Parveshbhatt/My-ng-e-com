import { isDevMode, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';


import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { SignupFormComponent } from '../../components/signup-form/signup-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from 'src/app/home/home.component';
import { CartComponent } from 'src/app/cart/cart.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducer } from 'src/app/app.state';
import { ProductComponent } from 'src/app/product/product.component';
import { ProductDetailComponent } from 'src/app/product-detail/product-detail.component';

// {path: 'products/:id', component: ProductComponent},
const appRoute: Routes = [
  {path: '', component: LoginFormComponent},
  {path: 'products', component: ProductComponent},
  { path: 'login', component: LoginFormComponent },
  { path: 'signup', component: SignupFormComponent },
  { path: 'cart', component: CartComponent },
  { path: 'home', component: HomeComponent },
  { path: 'product-detail', component: ProductDetailComponent },
  { path: 'product-detail/:item', component: ProductDetailComponent },

]

@NgModule({
  declarations: [
    LoginPageComponent,
    LoginFormComponent,
    SignupFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoute),
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  exports: [LoginPageComponent]
})
export class LoginPageModule { }
