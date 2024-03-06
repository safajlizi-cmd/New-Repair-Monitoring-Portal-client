import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserStoreService } from '../user-store.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth : UserStoreService , private router : Router){}
  canActivate():boolean{
    if(this.auth.isLoggedIn())
       return true;
    else{
      this.router.navigate(['Login'])
       return false;}
  }
  
}
