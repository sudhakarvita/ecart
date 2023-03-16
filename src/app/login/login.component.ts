import { Component, OnInit, } from '@angular/core';
import { FormBuilder,FormGroup,NgForm,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../shared/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

 

 constructor( private fb : FormBuilder, private us:ServiceService ,     private router:Router){}

  rgForm =this.fb.group({
   userName:['',[Validators.required,Validators.minLength(4)]],
   pwd:['',[Validators.required,Validators.minLength(4)]]

  });
  ngOnInit():void{}
  get userName(){
    return this.rgForm.get('userName')
  }
  get pwd(){
    return this.rgForm.get('pwd')
  }


 submit(f:any){
  console.log(f.value);
  
  
  this.us.loginUser(f.value.userName, f.value.pwd).subscribe((res)=>{
  this.router.navigate(['/home'])

  })
  
   }

 }


