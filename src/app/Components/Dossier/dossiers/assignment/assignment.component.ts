import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogAnimation } from '@progress/kendo-angular-dialog';
import { GenericService } from 'src/app/services/generic.service';
import { Location } from '@angular/common';
import { FilterExpandSettings } from '@progress/kendo-angular-treeview';
import { pencilIcon, plusIcon, trashIcon, clockIcon } from '@progress/kendo-svg-icons';
import { DrawerMode } from '@progress/kendo-angular-layout';
import { FlatTreeControl, NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeNestedDataSource } from '@angular/material/tree';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss']
})
export class AssignmentComponent implements OnInit {
  id: any
  assignId: any
  AssignForm!: FormGroup;
  WOForm!: FormGroup;
  opened = false
  openedassy = false
  selectedAct: any
  Assignments: any[] = [];
  Words: any[] = [];
  dossier !: any
  selectedItemId: any;
   Materials: any
   Locations: any
   damageTypes: any
  showAct: any
  public filterTerm = "";
  public icons = { plus: plusIcon, trash: clockIcon, delete: trashIcon, edite: pencilIcon };
  constructor(private route : ActivatedRoute, private api: GenericService, private fb: FormBuilder, private router: Router , private userStore:UserStoreService) {
  }
  getDossier() {
    this.api.getById("Dossier/GetById", this.id).subscribe({
      next: (res) => {
        this.dossier = res.dossier;
      },
      error: (err) => {
        alert("error get dossier")
      },
    });
  }
  getLocations() {
    this.api.getList("Location/List").subscribe({
      next: (res) => {
        this.Locations = res;
      },
      error: (err) => {
      },
    });
  }
  getMaterials() {
    this.api.getList("Material/List").subscribe({
      next: (res) => {
        this.Materials = res;
      },
      error: (err) => {
      },
    });
  }
  getDamageTypes() {
    this.api.getList("DamageType/List").subscribe({
      next: (res) => {
        this.damageTypes = res;
      },
      error: (err) => {
      },
    });
  }
  getAssignments() {
    this.api.getList("Assignment/List/" + this.id).subscribe({
      next: (res) => {
        this.Assignments = res;
        this.Assignments.forEach((assignment: any) => {
          this.Words = assignment.workingOrdersC
          if (this.Words!.length == 0) {
            assignment.workingOrdersC = [{ woNumber: 'No working orders...' }];
          }
        });
      },
      error: (err) => { alert("error get Assignments") },
    });
  }
  ngOnInit() {
    this.WOForm = this.fb.group({
      woNumber: ['', Validators.required],
      locationId: ['', Validators.required],
      materialId: ['', Validators.required],
      damageTypeId: ['', Validators.required],
      assignmentId: ['']
    });
    this.AssignForm = this.fb.group({
      assignmentNumber: ['', Validators.required],
      cause: ['', Validators.required],
      dupedName: ['', Validators.required],
      dossierId: ['']
    });
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.userStore.setDossierId(this.id)
      console.log("params[id]")
      console.log(params['id']);
      console.log("params[Id]")
      console.log(params['Id'])
    });
    this.getDossier();
    this.getAssignments();
    this.getDamageTypes();
    this.getLocations();
    this.getMaterials();
  }
  public nodeHasChildren(node: any): boolean {
    return node.children && node.children.length > 0;
  }
  public open(): void {
    this.openedassy = true;}
  public openWo(): void {
    this.opened = true;}
  onAssignmentClick(dataItem: any) {
    
    this.selectedAct = dataItem.id;
    this.getAssignments()
    if (dataItem.woNumber && dataItem.woNumber != 'No working orders...') {
      this.router.navigate(["Word/", dataItem.id], { relativeTo: this.route });
    }
    else {
      this.showAct = 'assyn'
      this.router.navigate(["Assignment/", dataItem.id], { relativeTo: this.route });
    }
  }

  onSubmit() {
    this.AssignForm.get('dossierId')?.setValue(this.id);
    this.api.add("Assignment/Add", this.AssignForm.value).subscribe({
      next: (res) => {
        alert('Assignment added successfully')
        this.AssignForm.reset(); // reset the task object after submitting the form
        this.getAssignments();  
         this.opened = false;

      },
      error: (err) => {
        alert("error adding ")
      },
    });
  }
  AddWorkingOrder() {
    this.WOForm.get('assignmentId')?.setValue(this.id);
    this.api.add("WorkingOrder/Add", this.WOForm.value).subscribe({
      next: (res) => {
        alert('Working Order added successfully')
        this.WOForm.reset(); 
        this.opened = false;
      },
      error: (err) => {
        alert("error adding ")
      },
    });
  }
  public close(status: string): void {
    this.opened = false;
    this.openedassy=false
  }
}