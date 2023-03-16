import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, of } from 'rxjs';
import { User } from './interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

userData:any=[
];

isLoggedIn = new BehaviorSubject<boolean>(false);

  constructor(private router:Router, private http : HttpClient) { 
    this.http.get(' http://localhost:3000/users').subscribe((res:any)=>{
      this.userData = res
    },
    (err:any)=>{
      console.log('error occurd',err);
      
    }
    );
  }
  isUserLoggedIn():boolean{   
    return !!localStorage.getItem('user')
  }
 
  loginUser(uName:any,password:any){
    let value = false;
    
    this.userData.filter((res:any)=>{
      if(res.email==uName && res.password==password){
          this.router.navigate(['/home'])
        localStorage.setItem('user', JSON.stringify(res))
        value = true;
      }

    });
    return of (value);
  }
addUser(payload:User){
 const url = ' http://localhost:3000/users';
 return this.http.post(url,payload)
}




}
