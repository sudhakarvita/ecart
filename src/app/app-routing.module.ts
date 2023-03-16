import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignuppageComponent } from './signuppage/signuppage.component';
import {AuthGuard} from './shared/auth/auth.guard';
import { ProductsComponent } from './products/products.component';
import { AdminComponent } from './admin/admin.component';
import { ProductsListComponent } from './admin/products-list/products-list.component';
import { ProductsDetailsComponent } from './admin/products-details/products-details.component';
import { ProductsEditComponent } from './admin/products-edit/products-edit.component';
import { ProductsDeleteComponent } from './admin/products-delete/products-delete.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},

  {path:'home',component:NavbarComponent, canActivate:[AuthGuard],children:[
    {path:'',redirectTo:'products',pathMatch:'full'},
    {path:'products',component:ProductsComponent},
    {path:'cart',component:CartComponent},
    {path:'admin',component:AdminComponent,children: [
    {path:'',redirectTo:'products-list',pathMatch:'full'},  
    {path:'products-list',component:ProductsListComponent},
    {path:'products-details/:id',component:ProductsDetailsComponent},
    {path:'product-edit/:id',component:ProductsEditComponent},
    {path:'product-delete',component:ProductsDeleteComponent},
    {path:'add-product',component:AddProductComponent},
      
    ]},
  ]},

  {path:'signuppage',component:SignuppageComponent},
  {path:'register-user',component:SignuppageComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
