import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../shared/auth/product.service';
import { CartService } from '../shared/cart.service';
import { ServiceService } from '../shared/service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
user:any
  allProducts:any=[];

rawProducts: any = [];

searchText:string='';

cartProductLength!:number;

constructor(private router:Router, private ps: ProductService,private cs:CartService, private us:ServiceService){}


ngOnInit():void{
this.user=JSON.parse(localStorage.getItem('token')!)


  this.cs.pLength.subscribe((res:any)=>{
  
    this.cartProductLength = res
    
  })
  this.ps.getAllProducts().subscribe((res:any)=>{
 
    
  this.allProducts = res;
  this.rawProducts = res;
  this.cProducts = res;
  });
}
cProducts = [];

  signout(){
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }

  onSearch(e:any){
    let value = e.target.value;
     
    this.allProducts = this.cProducts.filter((r:any)=> r.title.toLowerCase().includes(value.toLowerCase()))
  
     
  }


}
