import { Component } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../shared/interfaces/user';
import { ServiceService } from '../shared/service.service';
@Component({
  selector: 'app-signuppage',
  templateUrl: './signuppage.component.html',
  styleUrls: ['./signuppage.component.css']
})
export class SignuppageComponent {

  constructor(private fb:FormBuilder, private us : ServiceService, private router:Router){}  
    signup= this.fb.group({
     fname:['',[Validators.required,Validators.minLength(3),Validators.pattern('[a-zA-z]*')]],
     lname:['',[Validators.required,Validators.minLength(3),Validators.pattern('[a-zA-z]*')]],
     gender:['',[Validators.required]],
     role:['',[Validators.required]],
     email: ['',[Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
     mobile:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10), Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]] ,
     pwd:['',[Validators.required,Validators.minLength(4)]],
     cpwd:['',[Validators.required,]],
     check:['',[Validators.required]],

     address:this.fb.group({
      adrs:['',[Validators.required,Validators.minLength(8),Validators.pattern('[a-zA-z]*')]],
     city:['',[Validators.required,Validators.minLength(3),Validators.pattern('[a-zA-z]*')]],
     state:['',[Validators.required,Validators.minLength(3),Validators.pattern('[a-zA-z]*')]],
     pincode:['',[Validators.required,Validators.maxLength(6),Validators.pattern('^[1-9][0-9]{5}$')]]}),
     },
     {
      validators:this.MustMatch('pwd','cpwd')
     });

 ngOnInit(){}
  
 get fname(){
  return this.signup.get('fname')
}

 
get lname(){
  return this.signup.get('lname')
}

 
get gender(){
  return this.signup.get('gender')
}

 
get role(){
  return this.signup.get('role')
}

 
get email(){
  return this.signup.get('email')
}

get mobile(){
  return this.signup.get('mobile')
}

get pwd(){
  return this.signup.get('pwd')
}

get cpwd(){
  return this.signup.get('cpwd')
}

get adrs(){
  return this.signup.get('address.adrs')
}

get city(){
  return this.signup.get('address.city')
}

get state(){
  return this.signup.get('address.state')
}

get pincode(){
  return this.signup.get('address.pincode')
}

get check(){
  return this.signup.get('check')
}

MustMatch(controlName:string, matchingControlName: string){
 return(formGroup:FormGroup)=>{
  const control = formGroup.controls[controlName];
  const matchingControl = formGroup.controls[matchingControlName];
  if(matchingControl.errors && !matchingControl.errors.MustMatch ){
      return 
  }
  if(control.value !== matchingControl.value){
    matchingControl.setErrors({MustMatch:true})
  }else{
    matchingControl.setErrors(null)
  }
 }
}


submit(){
  

  let user : User = {
    fname: String(this.signup.value.fname),
    lname:String (this.signup.value.lname),
    fullName: this.signup.value.fname +' '+this.signup.value.lname,
    gender:String (this.signup.value.gender),
    roleType:String( this.signup.value.role),
    email: String(this.signup.value.email),
    mobile:Number(this.signup.value.mobile),
    password: String(this.signup.value.pwd),  
    check:Boolean( this.signup.value.check),
    address: {
       addr:String(this.signup.value.address?.adrs),
       city:String(this.signup.value.address?.city),
      state:String(this.signup.value.address?.state),
      pincode:String(this.signup.value.address?.pincode)
  }
}
 console.log(user);

 this.us.addUser(user).subscribe(
  (res:any)=>{
  this.router.navigate(['/login'])
  },
  (err:any)=>{console.log('error occured',err)})
  
}
}