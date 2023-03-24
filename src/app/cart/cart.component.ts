import { Component } from '@angular/core';
import { CartService } from '../shared/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartData:any;
  
  showFlag:boolean = false;


  constructor(private cs : CartService){}

  ngOnInit(){
    this.cs.getCart().subscribe((res:any)=>{
      this.cartData = res
      console.log(this.cartData);
      
    })
  }
  removeProduct(p:any){
    this.cs.removeProduct(p);
  }

  emptyCart(){
    this.cs.emptyTotalCart();  
    this.ngOnInit()
  }
  confirmOrder(){
    
    this.showFlag = true;
    this.cs.emptyTotalCart();  
    this.ngOnInit()
  }
}
