import { Component, OnInit } from '@angular/core';
import {FormBuilder ,FormGroup ,Validators ,FormControl} from "@angular/forms"
import { Router } from '@angular/router';
import { GenericService } from 'src/app/services/generic.service';
import { UserStoreService } from 'src/app/services/user-store.service';
import ValidateForm from '../helpers/validateform';
import { NotificationService } from '@progress/kendo-angular-notification';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;
  public errorMessage="";
  constructor(private fb : FormBuilder , private router : Router ,private api :GenericService,private userStore :UserStoreService ,private user :UserStoreService ,private notificationService: NotificationService ){
  }

  ngOnInit(): void {
    this.loginForm =this.fb.group({
      username :['',Validators.required],
      password :['',Validators.required]
    })
}
onLogin(){
    if(this.loginForm.valid){
              this.api.add("User/authentificate",this.loginForm.value).subscribe({
                next:(res)=>{
                 this.router.navigate(['Dossiers'])
                 this.user.storeToken(res.token)
                  this.user.storeUser(res.user)
                  this.user.storeRole(res.user.role)
                  this.user.storeId(res.user.id)
                  this.user.storeUserName(res.user.userName)
                  this.loginForm.reset();
                  this.userStore.setFullNameForStore(res.user.userName);
                  this.userStore.setRoleForStore(res.user.role)
                  this.notificationService.show({
                    content: res.message,
                    animation: { 
                      type:"slide",
                      duration:500,
                    },
                    type: { style: "success" },
                  });            
                },
                error:(err)=>{
                  console.log(err.response)
                    
                }

              })
    } else{
         ValidateForm.validateAllFormFields(this.loginForm);

    }}

  }