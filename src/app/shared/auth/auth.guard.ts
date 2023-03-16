import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceService } from '../service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private us : ServiceService, private router :Router){}
  canActivate():  boolean {

      if(this.us.isUserLoggedIn() ){
        return this.us.isUserLoggedIn();
      }else{
        this.router.navigate(['login'])
        return this.us.isUserLoggedIn();
      }
         
    
  }
  
}
