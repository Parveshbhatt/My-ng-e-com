import { NgModule } from '@angular/core';
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


const appRoute: Routes = [
  {path: '', component: LoginFormComponent},
  {path: 'home', component: HomeComponent},
  {path: 'loginpage', component: LoginPageComponent},
  // {path: 'login', component: LoginFormComponent},
  {path: 'singup', component: SignupFormComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    LoginPageModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [
    UserService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
