import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateFormGroupArgs } from '@progress/kendo-angular-grid';
import { GenericService } from 'src/app/services/generic.service';
import { UserStoreService } from 'src/app/services/user-store.service';
 
@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css']
})
export class SendEmailComponent implements OnInit {
  opened =false
  public formGroup!: FormGroup;
 Email: any[]=[]
  id:any
   
  constructor(private formBuilder: FormBuilder,private api :GenericService , private userStore: UserStoreService) {
  }
  close(){
    this.opened=false
  }
  open(){
    this.opened = true
  }
 
   getEmail()
   {   this.api.getById("Email/GetById",this.id).subscribe({
       next: (res) => {
        console.log(res)
         this.Email =res;
         console.log(this.Email)
       },
       error: (err) => {
         alert("error")
       },
     });
   }
   ngOnInit(): void {
     this.id = this.userStore.getDossierId()
     this.getEmail()
   }
}