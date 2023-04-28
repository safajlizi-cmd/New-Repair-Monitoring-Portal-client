import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogAnimation } from '@progress/kendo-angular-dialog';
import { GenericService } from 'src/app/services/generic.service';
import { Location } from '@angular/common';
import { FilterExpandSettings } from '@progress/kendo-angular-treeview';
import {  pencilIcon, plusIcon, trashIcon,clockIcon } from '@progress/kendo-svg-icons';
import { DrawerMode } from '@progress/kendo-angular-layout';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  id:any
  AssignForm!: FormGroup
  opened=false
  selectedAct: any
  Assignments:any []=[];
  Words:any []=[];
  dossier !:any
  selectedItemId: any;
  showAct :any
  public filterTerm = "";
  public icons = { plus:plusIcon,trash: clockIcon,delete:trashIcon,edite:pencilIcon };
  
  constructor(private route : ActivatedRoute , private api:GenericService, private fb:FormBuilder){}
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
  getAssignments(){
    this.api.getList("Assignment/List/"+this.id).subscribe({
      next: (res) => {
             this.Assignments =res;
             this.Assignments.forEach((assignment:any) => {
             this.Words = assignment.workingOrdersC
             if ( this.Words!.length == 0) {
                    assignment.workingOrdersC = [{woNumber: 'No working orders...'}]; }  }); },
      error: (err) => { alert("error get Assignments")}, });  }
 ngOnInit(){
  this.AssignForm = this.fb.group({
    assignmentNumber: ['', Validators.required],
    cause: ['', Validators.required],
    dupedName: ['', Validators.required],
    dossierId: ['']
  });
      this.route.params.subscribe(params => {
      this.id = params['id'];
    });   
     this.getDossier()
    this.getAssignments();
  }
  public nodeHasChildren(node: any): boolean {
    return node.children && node.children.length > 0;
  }
  public open(): void {
    this.opened = true;
  }
  onAssignmentClick(dataItem: any) {
    this.selectedAct = dataItem.id;
    if(dataItem.woNumber && dataItem.woNumber !='No working orders...'){
      this.showAct= "work"
    }
    else{
    this.showAct= "assynment"}
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
public close(status: string): void {
  this.opened = false;}
}