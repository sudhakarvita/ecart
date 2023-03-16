import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/shared/auth/product.service';

@Component({
  selector: 'app-products-delete',
  templateUrl: './products-delete.component.html',
  styleUrls: ['./products-delete.component.css']
})
export class ProductsDeleteComponent {
@Input() productId:any;
@Output() flag = new EventEmitter<boolean>();

 constructor(private ps :ProductService, private router:Router){}
 ngonInit(){
  console.log('delete id',this.productId);
 }

 deleteProduct(){
  this.ps.deleteProduct(this.productId).subscribe((res:any)=>{
    console.log('deleted succesfully..')
    this.flag.emit(false);
    this.router.navigateByUrl('home/admin/products-list')
  },(err:any)=>{
    console.log('error occured',err);
    
  });
 }
 cancel(){
  this.flag.emit(false)
 }

}
