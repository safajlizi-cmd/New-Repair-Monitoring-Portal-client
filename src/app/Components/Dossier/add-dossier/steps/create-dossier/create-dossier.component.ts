import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from '@progress/kendo-angular-notification';
import { GenericService } from 'src/app/services/generic.service';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-create-dossier',
  templateUrl: './create-dossier.component.html',
  styleUrls: ['./create-dossier.component.css']
})
export class CreateDossierComponent implements OnInit {
  dossierForm !: FormGroup
  role:any
  data:any
  id:any
  usersL:any
  slectedUser:any
  constructor(private api : GenericService , private notificationService :NotificationService , private router :Router ,private fb : FormBuilder, private auth :UserStoreService){}
  
  getUsers() {
    this.api.getById("User/List" , this.id).subscribe({
      next: (res) => {
        this.data = res;
        this.usersL=res
      },
      error: (err) => {
      },
    });
  }
  onSelectedUser(selectedUser: any) {
    this.slectedUser = selectedUser
  }
  public handleFilterChange(searchTerm: string): void {
    const normalizedQuery = searchTerm.toLowerCase();

    // search in all three fields diplayed in the popup table
    const filterExpression = (user: any) =>
      user.firstName.toLowerCase().includes(normalizedQuery) ||
      user.lastName.toLowerCase().includes(normalizedQuery) ||
      user.userName.toLowerCase().includes(normalizedQuery) ||
      user.email.toLowerCase().includes(normalizedQuery);
    ;

    this.data = this.usersL.filter(filterExpression);
  }
   ngOnInit(): void {
    this.dossierForm = this.fb.group({
      DossierNumber: ['', Validators.required],
      dupedName: ['', Validators.required],
      Assigned: [false],
      CreatedById :['']
    });  
      this.role= this.auth.getRole();
      this.id = this.auth.getId();
      this.getUsers();
   }
   addDossier(){
    this.dossierForm.get('CreatedById')?.setValue(this.auth.getId());
    this.api.add("Dossier/Add",this.dossierForm.value).subscribe({
    next: (res) => {
      this.notificationService.show({
        content: 'Dossier added successfully',
        animation: {
          type: "slide",
          duration: 500,
        },
        type: { style: "success" },
      });
      this.dossierForm.reset();  
    },
    error: (err) => {
    },
  });
}
}
