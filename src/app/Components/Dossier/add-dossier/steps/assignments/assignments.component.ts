import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from '@progress/kendo-angular-notification';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
   AssignForm !: FormGroup
   bts :any[]=[];
   causes :any [] =[];
   constructor(private notificationService :NotificationService,private fb:FormBuilder , private api :GenericService){}
   getCauses() {
    this.api.getList("Cause").subscribe({
      next: (res) => {
        this.causes = res;
       
      },
      error: (err) => { 
        this.notificationService.show({
          content: "Error occurred while geeting causes",
          animation: {
            type: "slide",
            duration: 500,
          },
          type: { style: "error" },
        });
        }, 
    });
  }
  getBuildingtypes() {
    this.api.getList("Building").subscribe({
      next: (res) => {
        this.bts = res;
       
      },
      error: (err) => {
        this.notificationService.show({
          content: "Error occurred while geeting buildings",
          animation: {
            type: "slide",
            duration: 500,
          },
          type: { style: "error" },
        });
        },
    });
  }
  ngOnInit(): void {
    this.AssignForm = this.fb.group({
      product: ['', Validators.required],
      cause: ['', Validators.required],
      buildingType: ['', Validators.required],
      dossierId: ['']
    });
  }
  onSubmit() {
    this.AssignForm.get('dossierId')?.setValue("this.id");
    this.api.add("Assignment/Add",this.AssignForm.value).subscribe({
      next: (res) => {
        this.notificationService.show({
          content:'Assignment added successfully' ,
          animation: {
            type: "slide",
            duration: 500,
          },
          type: { style: "success" },
        });
        
        this.AssignForm.reset(); // reset the task object after submitting the form
      },
      error: (err) => {
        this.notificationService.show({
          content: "Error occurred while adding Assignment",
          animation: {
            type: "slide",
            duration: 500,
          },
          type: { style: "error" },
        });
        },
      
    });
  }
}
