import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {

  private fullName$ = new BehaviorSubject<string>("");
  private role$ = new BehaviorSubject<string>("")
   constructor(private router :Router) { }
   public getRoleFromStore(){
     return this.role$.asObservable();
   }
 
   public setRoleForStore(role :string){
     this.role$.next(role);
   }
 
   public getFullNameFromStore(){
      return  this.fullName$.asObservable();
   }
   public setFullNameForStore(fullName : string){
     this.fullName$.next(fullName)
   }
   storeUserName(Value: string) {
    localStorage.setItem('username', Value)
  }
  getUserName() {
    return localStorage.getItem('username')
  }
  storeRole(Value: string) {
    localStorage.setItem('role', Value)
  }
  getRole() {
    return localStorage.getItem('role')
  }
  storeId(Value: string) {
    localStorage.setItem('id', Value)
  }
  getId() {
    return localStorage.getItem('id')
  }
  storeUser(Value: string) {
    localStorage.setItem('user', Value)
  }
  getUser() {
    return localStorage.getItem('user')
  }
  isLoggedIn():boolean{
    return !!localStorage.getItem('user')
  }
  signOut(){
    localStorage.clear();
    this.router.navigate(['Login'])
  }
  }