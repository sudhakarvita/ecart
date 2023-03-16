import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductI } from 'src/app/shared/interfaces/product';
import { ProductService } from 'src/app/shared/auth/product.service';



@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

 addProduct!:FormGroup
 imgUrl : string = '';
 images:string []=[];
 categoryList = [];
  constructor(private fb :FormBuilder, private ps : ProductService){}

  ngOnInit(): void{
  this.addProduct = this.fb.group({
      title: ['',[Validators.required]],
      description: ['',[Validators.required]],
      price: ['',[Validators.required]],
      category: ['',[Validators.required]],
      rating: ['',[Validators.required]],

  })
  }

  addImage(){
    if(this.imgUrl){
      this.images.push(this.imgUrl);
      this.imgUrl = ''
    }
  }

  removeImgUrl(index:any){
    if(this.images.length>0){
      this.images = this.images.filter((img:any, i:any) => i != index)
    }
  }



  submit(){
    if(this.addProduct.valid){
    let productData : ProductI = {
      title: this.addProduct.value.title,
      price: this.addProduct.value.price,
      description: this.addProduct.value.description,
      category:this.addProduct.value.category,
      images:this.images,
      rating:this.addProduct.value.rating,
    };

  this.ps.addProduct(productData ).subscribe((res:any)=>{
    console.log('product added succesfully');
    
  },(err:any)=>{
   console.log('error occred',err);
   
  });


  }

  }
  
}
