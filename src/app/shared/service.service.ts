import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, of } from 'rxjs';
import { User } from './interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  url = ' http://localhost:3000/users';
userData :any =[];

isLoggedIn = new BehaviorSubject<boolean>(false);

  constructor(private router:Router, private http : HttpClient) {}
  isUserLoggedIn():boolean{   
    return !!localStorage.getItem('token')
  }
 
  
addUser(payload:User){
 
 return this.http.post(this.url,payload)
}
getUsers(){
  return this.http.get(this.url)
}



}
