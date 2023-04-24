import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogAnimation } from '@progress/kendo-angular-dialog';
import { GenericService } from 'src/app/services/generic.service';
import { Location } from '@angular/common';
import {  mapMarkerIcon, pencilIcon, plusIcon, trashIcon } from '@progress/kendo-svg-icons';
@Component({
  selector: 'app-assignment-list',
  templateUrl: './assignment-list.component.html',
  styleUrls: ['./assignment-list.component.css']
})
export class AssignmentListComponent {
public icons = { plus:plusIcon,trash: mapMarkerIcon,trashh:plusIcon ,delete:trashIcon,edite:pencilIcon };
public opened = false;
public openedWO = false;
public animation: boolean | DialogAnimation = {};
public dialogThemeColor:any= "primary";
AssignForm!: FormGroup;
WOForm!:FormGroup;
id :any;
clicked =false
Materials: any;
Locations: any;
damageTypes :any;
Assignments: any;
dossier:any;
worders:any;
constructor(private fb : FormBuilder , private router : Router , private api :GenericService , private route : ActivatedRoute , private location :Location){ }
getWorkingOrders() {
  this.api.getList("WorkingOrder/List").subscribe({
    next: (res) => {
      this.worders =res;
      console.log(res);
    },
    error: (err) => {
      alert("error get working orders")
    },
  });
}
getDossier(){
  this.api.getById("Dossier/GetById",this.id).subscribe({
    next: (res) => {
      this.dossier =res.dossier;
      console.log("this.dossier");
      console.log(this.dossier);
    },
    error: (err) => {
    },
  });
}
getLocations(){
  this.api.getList("Location/List").subscribe({
    next: (res) => {
      this.Locations =res;
      console.log(res);
    },
    error: (err) => {
    },
  });
}
getMaterials(){
  this.api.getList("Material/List").subscribe({
    next: (res) => {
      this.Materials =res;
      console.log(res);
    },
    error: (err) => {
    },
  });
}

getDamageTypes(){
  this.api.getList("DamageType/List").subscribe({
    next: (res) => {
      this.damageTypes =res;
      console.log(res);
    },
    error: (err) => {
    },
  });
}
getAssignments(){
  this.api.getList("Assignment/List").subscribe({
    next: (res) => {
      this.Assignments =res;
      console.log(res);
    },
    error: (err) => {
      alert("error get Assignments")
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
  this.AssignForm = this.fb.group({
    assignmentNumber: ['', Validators.required],
    cause: ['', Validators.required],
    dupedName: ['', Validators.required],
    dossierId: ['']
  });
  this.route.params.subscribe(params => {
    this.id = params['id'];
  });
  this.getAssignments();
  this.getDamageTypes();
  this.getLocations();
  this.getMaterials();
  this.getWorkingOrders();
  this.getDossier();
}

onSubmit() {
  this.AssignForm.get('dossierId')?.setValue(this.id);
  this.api.add("Assignment/Add",this.AssignForm.value).subscribe({
    next: (res) => {
      alert('Assignment added successfully')
      this.AssignForm.reset(); // reset the task object after submitting the form
      this.opened = false;
      this.getAssignments();
    },
    error: (err) => {
      alert("error adding ")
    },
  });
}
AddWorkingOrder() {
  this.api.add("WorkingOrder/Add",this.WOForm.value).subscribe({
    next: (res) => {
      alert('Working Order added successfully')
      this.WOForm.reset(); // reset the task object after submitting the form
      this.openedWO = false;
      this.getAssignments();
    },
    error: (err) => {
      alert("error adding ")
    },
  });
}
public back(){
  this.location.back();

}
public close(status: string): void {
  console.log(`Dialog result: ${status}`);
  this.opened = false;
  this.openedWO= false;
  this.AssignForm.reset(); // reset the task object after submitting the form
  this.WOForm.reset(); // reset the task object after submitting the form

}

public open(): void {

  this.opened = true;
}
public openWO(idd:any): void {
  this.WOForm.get('assignmentId')?.setValue(idd);
  this.openedWO = true;
}
onPanelBarItemClicked() {
 this.clicked = !this.clicked;}
}
