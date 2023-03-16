import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignuppageComponent } from './signuppage/signuppage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule,  ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductsListComponent } from './admin/products-list/products-list.component';
import { ProductsDetailsComponent } from './admin/products-details/products-details.component';
import { ProductsEditComponent } from './admin/products-edit/products-edit.component';
import { ProductsDeleteComponent } from './admin/products-delete/products-delete.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignuppageComponent,
    NavbarComponent,
    AdminComponent,
    UserComponent,
    ProductsComponent,
    ProductsListComponent,
    ProductsDetailsComponent,
    ProductsEditComponent,
    ProductsDeleteComponent,
    AddProductComponent,
    CartComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
