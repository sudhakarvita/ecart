import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { ProductI } from "../interfaces/product";

@Injectable({providedIn: 'root'})


export class ProductService {
    baseUrl = 'http://localhost:3000';
   
   rawProducts =  [];

    constructor(private http : HttpClient){
   // //   this.http.get('https://dummyjson.com/products').subscribe((res:any)=>{
        
   // // //   res.products.filter((p:any)=>{

   // // //  let product : ProductI ={       
   // // //          title:p.title ,
   // // //          description: p.description,
   // // //          price: p.price,
   // // //          images: p.images,
   // // //          category:p.category ,
   // // //          rating: p.rating,
   // // //          };
   // // // this.addProduct(product).subscribe(res=>{
   // // //  console.log("products added succesfully");
    
   // // // }) 
   // // //   })
   //   });
    }

   


    getAllProducts(){
       return this.http.get(this.baseUrl+'/products');
    }

    getProductById(id:any){
      return this.http.get(this.baseUrl+'/products/'+id);
    }

    addProduct(payload:any){
       return this.http.post('http://localhost:3000/products',payload);
    }

    editProduct(id:any,payload:any){
      return this.http.put(this.baseUrl+'/products/'+id,payload)
    }

    deleteProduct(id:any){
      return this.http.delete(this.baseUrl+'/products/'+id)
    }
}