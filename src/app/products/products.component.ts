import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/auth/product.service';
import { CartService } from '../shared/cart.service';
import { CartI, CartProducts } from '../shared/interfaces/cart-i';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

allProducts:any=[];

rawProducts: any = [];

searchText:string='';

categories : any = [
  { id:1, name:'all', active:true},
  { id:2, name:'laptops', active:false},
  { id:3, name:'smartphones', active:false},
  { id:4, name:'skincare', active:false},
  { id:5, name:'groceries', active:false},
  { id:6, name:'fragrances', active:false},
];
    

constructor(private ps: ProductService,private cs:CartService){}

ngOnInit():void{
  this.ps.getAllProducts().subscribe((res:any)=>{
   
    
  this.allProducts = res;
  this.rawProducts = res;
  this.cProducts = res;
  });
}

cProducts = [];

onCategory(b:any){
  this.searchText='';
  
  
  if(b.name == 'all'){
    this.ngOnInit()
    
  }else{
   
  this.allProducts = this.rawProducts.filter((p:any) => p.category  == b.name);
  this.cProducts = this.allProducts;
 }

 
  this.allProducts = this.rawProducts.filter((p:any) => p.category  == b.name);

  this.categories.filter((c:any)=>{
     if(c.id == b.id){
      c.active = true;
    
      
     }else{
      c.active = false;
     }
  });
}

onSearch(e:any){
  let value = e.target.value;
   
  this.allProducts = this.cProducts.filter((r:any)=> r.title.toLowerCase().includes(value.toLowerCase()));   
}

// cartProductsArr : CartProducts[]=[]

 addToCart(p:any){
  this.cs.addCart(p);
// if(this.cs.cart?.cartProducts?.length >0){  
// this.cs.cart?.cartProducts.filter((res:any)=>{
//   if(res.id == p.id){
//    res.quantity = res.quantity+1;
//    res.total = res.price *res.quantity;
//   }
// });

// let addFlag = this.cs.cart.cartProducts.every((r:any)=> r.id != p.id);

// if(addFlag){
//   let newProduct: CartProducts = {
//         id: p.id,
//         title: p.title,
//         price: p.price,
//         quantity:1,
//         total: p.price,     
//       }
//       this.cartProductsArr.push(newProduct);
// }
// }else{
//   let newProduct: CartProducts = {
//     id: p.id,
//     title: p.title,
//     price: p.price,
//     quantity:1,
//     total: p.price,     
//   }
//   this.cartProductsArr.push(newProduct);
// }; 
 
//  let priceArray = this.cartProductsArr.map((res:any)=>res.total)
//  let quantityArray = this.cartProductsArr.map((res:any)=>res.quantity)
 
//   let cartobject: CartI ={
//     totalPrice: priceArray.reduce((a,b)=>a+b),
//     totalQuantity:quantityArray.reduce((a,b)=>a+b),
//     cartProducts: this.cartProductsArr
//   }  
//   this.cs.addCart(cartobject)
} 
};


