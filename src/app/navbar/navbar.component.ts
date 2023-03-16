import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../shared/auth/product.service';
import { CartService } from '../shared/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  allProducts:any=[];

rawProducts: any = [];

searchText:string='';

cartProductLength!:number;

constructor(private router:Router, private ps: ProductService,private cs:CartService){}


ngOnInit():void{
  this.cs.pLength.subscribe((res:any)=>{
    console.log(res);
    this.cartProductLength = res
    
  })
  this.ps.getAllProducts().subscribe((res:any)=>{
    console.log(res);
    
  this.allProducts = res;
  this.rawProducts = res;
  this.cProducts = res;
  });
}
cProducts = [];

  signout(){
    localStorage.removeItem('user')
    this.router.navigate(['/login'])
  }

  onSearch(e:any){
    let value = e.target.value;
     
    this.allProducts = this.cProducts.filter((r:any)=> r.title.toLowerCase().includes(value.toLowerCase()))
  
     
  }


}
