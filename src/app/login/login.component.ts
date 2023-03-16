import { Component, OnInit, } from '@angular/core';
import { FormBuilder,FormGroup,NgForm,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../shared/interfaces/user';
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
 this.us.getUsers().subscribe((res:any)=>{ 
const pUser:User | undefined =res.find((x:User)=>{
return x.email===f.userName && x.password===f.pwd
})
if(pUser){
  alert('login success')
  localStorage.setItem('token', JSON.stringify(pUser))
  this.router.navigate(['/home'])
}else{
  alert('user not found')
}
   })
  }}

 


