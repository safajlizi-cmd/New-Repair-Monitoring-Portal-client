import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateFormGroupArgs } from '@progress/kendo-angular-grid';
import { NotificationService } from '@progress/kendo-angular-notification';
import { GenericService } from 'src/app/services/generic.service';
import { UserStoreService } from 'src/app/services/user-store.service';
 
@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css']
})
export class SendEmailComponent implements OnInit {
  opened =false
  noteForm!: FormGroup;
  option : any
  Email: any[]=[]
  id:any
  assignments: any[] = []
  word: any[] = []
  constructor(private fb: FormBuilder,private api :GenericService ,private notificationService :NotificationService, private userStore: UserStoreService) {
  }
  close(){
    this.opened=false
  }
  open(){
    this.opened = true
  }
 
   getEmail()
   {   this.api.getById("Email",this.id).subscribe({
       next: (res) => {
          this.Email =res;
       },
       error: (err) => {
       },
     });
   }
   getAssignments() {
    this.api.getList("Assignment/List/" +  this.id ).subscribe({
      next: (res) => {
          this.assignments = res;
          this.assignments.forEach((assignment: any) => {
          this.word.push(...assignment.workingOrdersC);
        });
      },
      error: (err) => {
      },
    });
  }
   ngOnInit(): void {
     this.id = this.userStore.getDossierId()
     this.getEmail()
     this.noteForm = this.fb.group({
      name: ['', Validators.required],
      message: ['',Validators.required],
      email: ['', Validators.required],
      subject: ['', Validators.required],
      option: ['dossier'],
      optionName: [''],
      dossierId: [''],
    });
    this.getAssignments()
   }
   onSelected(selected: any) {
    this.option = selected;
  }
   sendEmail(){
    this.noteForm.get('dossierId')?.setValue(this.id);
    if (this.noteForm.get('option')?.value == 'dossier') {
      this.noteForm.get('optionName')?.setValue('dossier');
    }
  
    this.api.add("Email", this.noteForm.value).subscribe({
      next: (res) => {     
        this.opened = false;
        this.getEmail() ;     
        this.noteForm.reset();
        this.notificationService.show({
          content: "Email added successfully",
          animation: { 
            type:"slide",
            duration:500,
          },
          type: { style: "success" },
        });    
      },
      error: (err) => {
        this.opened =false
        this.getEmail()
      },
    });
  }
}