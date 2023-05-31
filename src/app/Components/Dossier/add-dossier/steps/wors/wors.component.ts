import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from '@progress/kendo-angular-notification';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-wors',
  templateUrl: './wors.component.html',
  styleUrls: ['./wors.component.css']
})
export class WORSComponent implements OnInit {
  WOForm!:FormGroup
  Materials: any;
  Locations: any;
  damageTypes: any;
  constructor( private fb : FormBuilder ,private notificationService :NotificationService , private api :GenericService ){ }
  getLocations(){
    this.api.getList("Location/List").subscribe({
      next: (res) => {
        this.Locations =res;
      },
      error: (err) => {
      },
    });
  }
  getMaterials(){
    this.api.getList("Material/List").subscribe({
      next: (res) => {
        this.Materials =res;
      },
      error: (err) => {
      },
    });
  }
  
  getDamageTypes(){
    this.api.getList("DamageType/List").subscribe({
      next: (res) => {
        this.damageTypes =res;
      },
      error: (err) => {
      },
    });
  }
  ngOnInit(): void {
    this.WOForm = this.fb.group({
      woNumber: ['', Validators.required],
      locationId: ['', Validators.required],
      materialId: ['', Validators.required],
      damageTypeId: ['',Validators.required],
      assignmentId:['']
    });
    this.getDamageTypes();
    this.getLocations();
    this.getMaterials();
  }
   AddWorkingOrder() {
    this.api.add("WorkingOrder/Add",this.WOForm.value).subscribe({
      next: (res) => {
        this.notificationService.show({
          content: 'Working Order added successfully',
          animation: {
            type: "slide",
            duration: 500,
          },
          type: { style: "success" },
        });
        this.WOForm.reset(); // reset the task object after submitting the form
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
}
