import { Component } from '@angular/core';
import { ProductService } from 'src/app/shared/auth/product.service';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
  allProducts:any=[];
  

rawProducts: any = [];

searchText:string='';
cProducts = [];

categories : any = [
  { id:1, name:'all', active:true},
  { id:2, name:'laptops', active:false},
  { id:3, name:'smartphones', active:false},
  { id:4, name:'skincare', active:false},
  { id:5, name:'groceries', active:false},
  { id:6, name:'fragrances', active:false},
];

  constructor(private ps: ProductService){}

  ngOnInit(): void {
   
    this.ps.getAllProducts().subscribe((res:any)=>{
      console.log(res);
      
    this.allProducts = res
    this.rawProducts = res;
  this.cProducts = res;
 
    })
}
onCategory(b:any){
  this.searchText='';
  console.log(b);
  
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
   
  this.allProducts = this.cProducts.filter((r:any)=> r.title.toLowerCase().includes(value.toLowerCase()))

   
}
}




    













