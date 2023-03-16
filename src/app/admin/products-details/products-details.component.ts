import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/shared/auth/product.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent {
  addProduct!:FormGroup
 imgUrl : string = '';
 images:string []=[];
 categoryList = [];
 id:any;
 product:any;
 deleteFlag:boolean = false;
  constructor(private fb :FormBuilder, private ps : ProductService, private route: ActivatedRoute){}

  ngOnInit(): void{
  this.addProduct = this.fb.group({
      title: ['',[Validators.required]],
      description: ['',[Validators.required]],
      price: ['',[Validators.required]],
      category: ['',[Validators.required]],
      rating: ['',[Validators.required]],

  });

 console.log(this.route.snapshot.params['id']);
 
this.id = this.route.snapshot.params['id'];


if(this.id){
this.ps.getProductById(this.id).subscribe((res:any)=>{
  this.product = res

this.addProduct.setValue({
  title:res.title ,
  description:res. description ,
  price:res.price,
  category:res.category ,
  rating:res.rating ,

});

this.images = res.images;

},(err:any)=>{console.log('error occured',err)});

}
  }
  submit(){}

  openDeletePopup(){
    this.deleteFlag = true;
  }
  
}
