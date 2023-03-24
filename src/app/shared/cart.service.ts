import { Injectable } from "@angular/core";
import { BehaviorSubject, of } from "rxjs";
import { CartI, CartProducts } from "./interfaces/cart-i";

@Injectable({providedIn: 'root'})

export class CartService{
 
  cart!: CartI;
  pLength = new BehaviorSubject<number>(0)
  cs: any;

 constructor(){}
 
 cartProductsArr : CartProducts[]=[];

 addCart(p:any){
  // this.cs.addCart(p);
 
  
if(this.cart?.cartProducts?.length >0){  
this.cart?.cartProducts.filter((res:any)=>{
  if(res.id == p.id){
   res.quantity = res.quantity+1;
   res.total = res.price * res.quantity;
  }
});

let addFlag = this.cart.cartProducts.every((r:any)=> r.id != p.id);

if(addFlag){
  let newProduct: CartProducts = {
        id: p.id,
        title: p.title,
        price: p.price,
        images:p.images,
        quantity:1,
        total: p.price,     
      }
      this.cartProductsArr.push(newProduct);
}
}else{
  let newProduct: CartProducts = {
    id: p.id,
    title: p.title,
    price: p.price,
    images:p.images,
    quantity:1,
    total: p.price,     
  }
  this.cartProductsArr.push(newProduct);
}; 
 
 let priceArray = this.cartProductsArr.map((res:any)=>res.total)
 let quantityArray = this.cartProductsArr.map((res:any)=>res.quantity)
 
  let cartobject: CartI ={
    totalPrice: priceArray.reduce((a,b)=>a+b),
    totalQuantity:quantityArray.reduce((a,b)=>a+b),
    cartProducts: this.cartProductsArr,
  };  
  this.cart = cartobject;
  this.pLength.next(this.cart.cartProducts.length)
  console.log(this.cart);
  
}

 

 getCart(){
  return of(this.cart)
 }

 removeProduct(p:any){
  this.cart.cartProducts = this.cart.cartProducts.filter((res:any)=>res.id != p?.id);
  this.cartProductsArr = this.cart.cartProducts;

  if(this.cartProductsArr.length > 0){
    this.cart.totalQuantity = this.cart.cartProducts.map((res:any)=> res.total).reduce((a,b)=> a+b );
    this.cart.totalPrice = this.cart.cartProducts.map((res:any)=> res.quantity).reduce((a,b)=> a+b ) * this.cart.totalQuantity;
  }else{
    let c = {
      totalPrice:0,
      totalQuantity:0,
      cartProducts:[],
    };
    this.cart = c;
  }
  this.pLength.next(this.cart.cartProducts.length);
 }

 emptyTotalCart(){
  const c = {
    totalPrice: 0,
    totalQuantity: 0,
    cartProducts:[],
  }
  this.cart = c;

  this.pLength.next(this.cart.cartProducts.length);
 }
}